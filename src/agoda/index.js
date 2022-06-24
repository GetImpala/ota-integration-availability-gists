const axios = require('axios').default;
var convert = require('xml-js');

const hotels = [
    28687914
];

const API_KEY = '';

const parser = new XMLParser();

async function getHotels() {
    for (const hotel of hotels) {
        let propertyId = '28687914';
        let roomId = '448366388';
        let rateplanId = '12521466';
        let dateFrom = `2022-06-28`;
        let dateTo = `2022-06-29`;

        const payload =
            `<?xml version="1.0" encoding="UTF-8"?>
            <request timestamp="1559902413" type="11">
                <criteria from="${dateFrom}" to="${dateTo}">
                    <property id="${propertyId}" />
                </criteria>
            </request>`;

        await axios.post(`https://supply.agoda.com/api?apiKey=${API_KEY}`, payload, {
            headers: {
                'Content-Type': 'text/xml'
            }
        })
            .then((r) => {
                let parsedData = convert.xml2js(r.data, {compact: true});
                parsedData.result.properties.property.forEach((item) => {
                    item.rates.forEach((ratesItem) => {
                        ratesItem.room.forEach((roomItem) => {
                            const outputItem = {
                                date: item._attributes.date,
                                rateplanId: ratesItem._attributes.rateplan_id,
                                currency: ratesItem._attributes.currency,
                                roomId: roomItem._attributes.room_id,
                                roomClosed: roomItem._attributes.closed,
                                // allotment: item.inventories.room._attributes.allotment,
                                // inventoryClosed: item.inventories.room._attributes.closed,
                            }
                            console.log(outputItem);
                        });
                    });
                    item.inventories.room.forEach((roomInventoryItem) => {
                        const outputItem = {
                            roomId: roomInventoryItem._attributes.room_id,
                            allotment: roomInventoryItem._attributes.allotment,
                            inventoryClosed: roomInventoryItem._attributes.closed,
                        }
                        console.log(outputItem);
                    })
                });
            })
            .catch((err) => {
                console.error(err);
            });



        // var dataString = `{"language":"en-us","hotelId":${hotel},"RoomTypeId":0,"StartDate":"2022-06-09","EndDate":"2022-07-09"}`;
        //
        // const { data } = await curly.post(
        //     `https://supply.agoda.com/api?apiKey=${API_KEY}`,
        //     {
        //         postFields: dataString,
        //         httpHeader: headers,
        //     }
        // );
        // console.log(`Saving hotel ${hotel} ${data.IsSuccess}`);
        // fs.writeFileSync(`hotel-ari-5/${hotel}.json`, JSON.stringify(data));
        // await new Promise((r) => setTimeout(r, 3000));
    }
}

getHotels();
