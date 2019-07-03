
notam-decoder
=======

notam-decoder is JavaScript library for parsing and decoding NOTAMs (Notices to Airmen).

Most code was written based on a interpretation of documentation available from 
[ICAO](https://www.icao.int)'s [Aeronautical Information Services Manual]((https://www.icao.int/NACC/Documents/Meetings/2014/ECARAIM/REF09-Doc8126.pdf)) and [EUROCONTROL](https://www.eurocontrol.int)'s 
[Guidelines Operating Procedures for AIS Dynamic Data (OPADD)](https://www.eurocontrol.int/sites/default/files/publication/files/OPADD_Ed4.0_v01.00.pdf)


You can read about notice to airmen in the [NOTAM article on Wikipedia](https://en.wikipedia.org/wiki/NOTAM).


## Usage example

```javascript
// get decoded notam as json Object
var notam = notamDecoder.decode(input);

