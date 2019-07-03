(function () {
     'use strict';

     // constants
     const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
     const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
     const subjects = [
          {
               code: 'L', area: 'AGA', subArea: 'Lighting Facilities', subjects: [
                    { entity: 'LA', subject: 'Approach lighting system (specify runway and type)' },
                    { entity: 'LB', subject: 'Aerodrome beacon' },
                    { entity: 'LC', subject: 'Runway center line lights (specify runway)' },
                    { entity: 'LD', subject: 'Landing direction indicator lights' },
                    { entity: 'LE', subject: 'Runway edge lights (specify runway)' },
                    { entity: 'LF', subject: 'Sequenced flashing lights (specify runway)' },
                    { entity: 'LG', subject: 'Pilot-controlled lighting', abbreviations: 'pcl' },
                    { entity: 'LH', subject: 'High intensity runway lights (specify runway)' },
                    { entity: 'LI', subject: 'Runway end identifier lights (specify runway)' },
                    { entity: 'LJ', subject: 'Runway alignment indicator lights (specify runway)' },
                    { entity: 'LK', subject: 'Category II components of approach lighting system (specify runway)' },
                    { entity: 'LL', subject: 'Low intensity runway lights (specify runway)' },
                    { entity: 'LM', subject: 'Medium intensity runway lights (specify runway)' },
                    { entity: 'LP', subject: 'Precision approach path indicator (PAPI) (specify runway)' },
                    { entity: 'LR', subject: 'All landing area lighting facilities' },
                    { entity: 'LS', subject: 'Stopway lights (specify runway)' },
                    { entity: 'LT', subject: 'Threshold lights (specify runway)' },
                    { entity: 'LU', subject: 'Helicopter approach path indicator', abbreviations: 'hapi' },
                    { entity: 'LV', subject: 'Visual approach slope indicator system (specify type and runway)' },
                    { entity: 'LW', subject: 'Heliport lighting' },
                    { entity: 'LX', subject: 'Taxiway centre line lights (specify taxiway)' },
                    { entity: 'LY', subject: 'Taxiway edge lights (specify taxiway)' },
                    { entity: 'LZ', subject: 'Runway touchdown zone lights (specify runway)' },
               ]
          },
          {
               code: 'M', area: 'AGA', subArea: 'Movement and Landing Area', subjects: [
                    { entity: 'MA', subject: 'Movement area' },
                    { entity: 'MB', subject: 'Bearing strength (specify part of landing area or movement area)' },
                    { entity: 'MC', subject: 'Clearway (specify runway)' },
                    { entity: 'MD', subject: 'Declared distances (specify runway)' },
                    { entity: 'MG', subject: 'Taxiing guidance system' },
                    { entity: 'MH', subject: 'Runway arresting gear (specify runway)' },
                    { entity: 'MK', subject: 'Parking area' },
                    { entity: 'MM', subject: 'Daylight markings (specify threshold, centre line, etc.)' },
                    { entity: 'MN', subject: 'Apron' },
                    { entity: 'MO', subject: 'Stopbar (specify taxiway)' },
                    { entity: 'MP', subject: 'Aircraft stands (specify)' },
                    { entity: 'MR', subject: 'Runway (specify runway)' },
                    { entity: 'MS', subject: 'Stopway (specify runway)' },
                    { entity: 'MT', subject: 'Threshold (specify runway)' },
                    { entity: 'MU', subject: 'Runway turning bay (specify runway)' },
                    { entity: 'MW', subject: 'Strip (specify runway)' },
                    { entity: 'MX', subject: 'Taxiway(s) (specify)' },
                    { entity: 'MY', subject: 'Rapid exit taxiway (specify)' },

               ]
          },
          {
               code: 'F', area: 'AGA', subArea: 'Facilities and Services', subjects: [
                    { entity: 'FA', subject: 'Aerodrome' },
                    { entity: 'FB', subject: 'Braking action measurement equipment (specify type)' },
                    { entity: 'FC', subject: 'Ceiling measurement equipment' },
                    { entity: 'FD', subject: 'Docking system (specify AGNIS, BOLDS, etc.)' },
                    { entity: 'FE', subject: 'Oxygen (specify type)' },
                    { entity: 'FF', subject: 'Fire fighting and rescue' },
                    { entity: 'FG', subject: 'Ground movement control' },
                    { entity: 'FH', subject: 'Helicopter alighting area/platform' },
                    { entity: 'FI', subject: 'Aircraft de-icing (specify)' },
                    { entity: 'FJ', subject: 'Oils (specify type)' },
                    { entity: 'FL', subject: 'Landing direction indicator' },
                    { entity: 'FM', subject: 'Meteorological service (specify type)' },
                    { entity: 'FO', subject: 'Fog dispersal system' },
                    { entity: 'FP', subject: 'Heliport' },
                    { entity: 'FS', subject: 'Snow removal equipment' },
                    { entity: 'FT', subject: 'Transmissometer (specify runway and, where applicable, designator(s) of transmissometer(s))' },
                    { entity: 'FU', subject: 'Fuel availability' },
                    { entity: 'FW', subject: 'Wind direction indicator' },
                    { entity: 'FZ', subject: 'Customs' },
               ]
          },
          {
               code: 'C', area: 'CNS', subArea: 'Communications and Surveillance Facilities', subjects: [
                    { entity: 'CA', subject: 'Air/ground facility (specify service and frequency)' },
                    { entity: 'CB', subject: 'Automatic dependent surveillance — broadcast (details)' },
                    { entity: 'CC', subject: 'Automatic dependent surveillance — contract (details)' },
                    { entity: 'CD', subject: 'Controller-pilot data link communications (specify application)' },
                    { entity: 'CE', subject: 'En route surveillance radar' },
                    { entity: 'CG', subject: 'Ground controlled approach system (GCA)' },
                    { entity: 'CL', subject: 'Selective calling system (SELCAL)' },
                    { entity: 'CM', subject: 'Surface movement radar' },
                    { entity: 'CP', subject: 'Precision approach radar (PAR) (specify runway)' },
                    { entity: 'CR', subject: 'Surveillance radar element of precision approach radar system (specify wavelength)' },
                    { entity: 'CS', subject: 'Secondary surveillance radar (SSR)' },
                    { entity: 'CT', subject: 'Terminal area surveillance radar (TAR)' },
               ]
          },
          {
               code: 'I', area: 'CNS', subArea: 'Instrument and Microwave Landing Systems', subjects: [
                    { entity: 'IC', subject: 'Instrument landing system (ILS) (specify runway)', type: 'I' },
                    { entity: 'ID', subject: 'DME associated with ILS', type: 'I' },
                    { entity: 'IG', subject: 'Glide path (ILS) (specify runway)', type: 'I' },
                    { entity: 'II', subject: 'Inner marker (ILS) (specify runway)', type: 'I' },
                    { entity: 'IL', subject: 'Localizer (ILS) (specify runway)', type: 'I' },
                    { entity: 'IM', subject: 'Middle marker (ILS) (specify runway)', type: 'I' },
                    { entity: 'IO', subject: 'Outer marker (ILS) (specify runway)', type: 'I' },
                    { entity: 'IS', subject: 'ILS Category I (specify runway)', type: 'I' },
                    { entity: 'IT', subject: 'ILS Category II (specify runway)', type: 'I' },
                    { entity: 'IU', subject: 'ILS Category III (specify runway)', type: 'I' },
                    { entity: 'IW', subject: 'Microwave landing system (MLS) (specify runway)', type: 'I' },
                    { entity: 'IX', subject: 'Locator, outer (ILS) (specify runway)', type: 'I' },
                    { entity: 'IY', subject: 'Locator, middle (ILS) (specify runway)', type: 'I' },
               ]
          },
          {
               code: 'G', area: 'CNS', subArea: 'GNSS Services', subjects: [
                    { entity: 'GA', subject: 'GNSS airfield-specific operations (specify operation) ', type: 'I' },
                    { entity: 'GW', subject: 'GNSS area-wide operations (specify operation', type: 'I' },
               ]
          },
          {
               code: 'N', area: 'CNS', subArea: 'Terminal and en-route Navigation Facilities', subjects: [
                    { entity: 'NA', area: 'CNS', subArea: 'Terminal and En Route Navigation Facilities', subject: 'All radio navigation facilities (except...)' },
                    { entity: 'NB', subject: 'Nondirectional radio beacon' },
                    { entity: 'NC', subject: 'DECCA' },
                    { entity: 'ND', subject: 'Distance measuring equipment (DME)' },
                    { entity: 'NF', subject: 'Fan marker' },
                    { entity: 'NL', subject: 'Locator (specify identification)' },
                    { entity: 'NM', subject: 'VOR/DME' },
                    { entity: 'NN', subject: 'TACAN' },
                    { entity: 'NO', subject: 'OMEGA' },
                    { entity: 'NT', subject: 'VORTAC' },
                    { entity: 'NV', subject: 'VOR' },
                    { entity: 'NX', subject: 'Direction finding station (specify type and frequency)' }
               ]
          },
          {
               code: 'A', area: 'ATM', subArea: 'Airspace Organization', subjects: [
                    { entity: 'AA', subject: 'Minimum altitude (specify en route/crossing/safe)' },
                    { entity: 'AC', subject: 'Class B, C, D, or E Surface Area' },
                    { entity: 'AD', subject: 'Air defense identification zone (ADIZ)' },
                    { entity: 'AE', subject: 'Control area (CTA)' },
                    { entity: 'AF', subject: 'Flight information region (FIR)' },
                    { entity: 'AG', subject: 'General facility' },
                    { entity: 'AH', subject: 'Upper control area (UTA)' },
                    { entity: 'AL', subject: 'Minimum usable flight level' },
                    { entity: 'AN', subject: 'Area navigation route' },
                    { entity: 'AO', subject: 'Oceanic control area (OCA)' },
                    { entity: 'AP', subject: 'Reporting point (specify name or entityd designator)' },
                    { entity: 'AR', subject: 'ATS route (specify)' },
                    { entity: 'AT', subject: 'Class B Airspace' },
                    { entity: 'AU', subject: 'Upper flight information region (UIR)' },
                    { entity: 'AV', subject: 'Upper advisory area (UDA)' },
                    { entity: 'AX', subject: 'Intersection (INT)' },
                    { entity: 'AZ', subject: 'Aerodrome traffic zone (ATZ)' }
               ]
          },
          {
               code: 'S', area: 'ATM', subArea: 'Air Traffic and VOLMET Services ', subjects: [
                    { entity: 'SA', subject: 'Automatic terminal information service (ATIS)' },
                    { entity: 'SB', subject: 'ATS reporting office' },
                    { entity: 'SC', subject: 'Area control centre (ACC)' },
                    { entity: 'SE', subject: 'Flight information service (FIS)' },
                    { entity: 'SF', subject: 'Aerodrome flight information service (AFIS)' },
                    { entity: 'SL', subject: 'Flow control centre' },
                    { entity: 'SO', subject: 'Oceanic area control centre (OAC)' },
                    { entity: 'SP', subject: 'Approach control service (APP)' },
                    { entity: 'SS', subject: 'Flight service station (FSS)' },
                    { entity: 'ST', subject: 'Aerodrome control tower (TWR)' },
                    { entity: 'SU', subject: 'Upper area control centre (UAC)' },
                    { entity: 'SV', subject: 'VOLMET broadcast' },
                    { entity: 'SY', subject: 'Upper advisory service (specify)' }
               ]
          },
          {
               code: 'P', area: 'ATM', subArea: 'Air Traffic Procedures', subjects: [
                    { entity: 'PA', subject: 'Standard instrument arrival (STAR) (specify route designator)' },
                    { entity: 'PB', subject: 'Standard VFR arrival' },
                    { entity: 'PC', subject: 'Contingency procedures' },
                    { entity: 'PD', subject: 'Standard instrument departure (SID) (specify route designator)' },
                    { entity: 'PE', subject: 'Standard VFR departure' },
                    { entity: 'PF', subject: 'Flow control procedure' },
                    { entity: 'PH', subject: 'Holding procedure' },
                    { entity: 'PI', subject: 'Instrument approach procedure (specify type and runway)' },
                    { entity: 'PK', subject: 'VFR approach procedure' },
                    { entity: 'PL', subject: 'Obstacle clearance limit (specify procedure)' },
                    { entity: 'PM', subject: 'Aerodrome operating minima (specify procedure and amended minimum)' },
                    { entity: 'PN', subject: 'Noise operating restrictions' },
                    { entity: 'PO', subject: 'Obstacle clearance altitude' },
                    { entity: 'PP', subject: 'Obstacle clearance height' },
                    { entity: 'PR', subject: 'Radio failure procedure' },
                    { entity: 'PT', subject: 'Transition altitude' },
                    { entity: 'PU', subject: 'Missed approach procedure (specify runway)' },
                    { entity: 'PX', subject: 'Minimum holding altitude (specify fix)' },
                    { entity: 'PZ', subject: 'ADIZ procedure' },
               ]
          },
          {
               code: 'R', area: 'Navigation Warnings', subArea: 'Airspace Restrictions', subjects: [
                    { entity: 'RA', subject: 'Airspace reservation (specify)' },
                    { entity: 'RD', subject: 'Danger area (specify national prefix and number)' },
                    { entity: 'RO', subject: 'Overflying of ... (specify)' },
                    { entity: 'RP', subject: 'Prohibited area (specify national prefix and number)' },
                    { entity: 'RR', subject: 'Restricted area (specify national prefix and number)' },
                    { entity: 'RT', subject: 'Temporary restricted area' }
               ]
          },
          {
               code: 'W', area: 'Navigation Warnings', subArea: 'Warnings', subjects: [
                    { entity: 'WA', subject: 'Air display' },
                    { entity: 'WB', subject: 'Aerobatics' },
                    { entity: 'WC', subject: 'Captive balloon or kite' },
                    { entity: 'WD', subject: 'Demolition of explosives' },
                    { entity: 'WE', subject: 'Exercises (specify)' },
                    { entity: 'WF', subject: 'Air refueling' },
                    { entity: 'WG', subject: 'Glider flying' },
                    { entity: 'WH', subject: 'Blasting' },
                    { entity: 'WJ', subject: 'Banner/target towing' },
                    { entity: 'WL', subject: 'Ascent of free balloon' },
                    { entity: 'WM', subject: 'Missile, gun or rocket firing' },
                    { entity: 'WP', subject: 'Parachute jumping exercise (PJE)' },
                    { entity: 'WS', subject: 'Burning or blowing gas' },
                    { entity: 'WT', subject: 'Mass movement of aircraft' },
                    { entity: 'WU', subject: 'Unmanned aircraft' },
                    { entity: 'WV', subject: 'Formation flight' },
                    { entity: 'WZ', subject: 'Model flying' }
               ]
          },
          {
               code: 'O', area: 'Other Information', subjects: [
                    { entity: 'OA', subject: 'Aeronautical information service' },
                    { entity: 'OB', subject: 'Obstacle (specify details)' },
                    { entity: 'OE', subject: 'Aircraft entry requirements' },
                    { entity: 'OL', subject: 'Obstacle lights on ... (specify)' },
                    { entity: 'OR', subject: 'Rescue coordination centre' }
               ]
          }
     ];
     const modifiers = [
          {
               code: 'A', condition: 'Availability', list: [
                    { status: 'AC', modifier: 'Withdrawn for maintenance', abbreviations: 'withdrawn maint' },
                    { status: 'AD', modifier: 'Available for daylight operation', abbreviations: 'avbl day ops' },
                    { status: 'AF', modifier: 'Flight checked and found reliable', abbreviations: 'fltck okay' },
                    { status: 'AG', modifier: 'Operating but ground checked only, awaiting flight check', abbreviations: 'opr but gnd ck only, awaiting fltck' },
                    { status: 'AH', modifier: 'Hours of service are now . . . (specify)', abbreviations: 'hr ser' },
                    { status: 'AK', modifier: 'Resumed normal operation', abbreviations: 'okay' },
                    { status: 'AL', modifier: 'Operative (or reoperative) subject to previously published limitations/conditions', abbreviations: 'opr subj previous cond' },
                    { status: 'AM', modifier: 'Military operations only', abbreviations: 'mil ops only' },
                    { status: 'AN', modifier: 'Available for night operation', abbreviations: 'avbl ngt ops' },
                    { status: 'AO', modifier: 'Operational', abbreviations: 'opr' },
                    { status: 'AP', modifier: 'Available, prior permission required', abbreviations: 'avbl, ppr' },
                    { status: 'AR', modifier: 'Available on request', abbreviations: 'avbl o/r' },
                    { status: 'AS', modifier: 'Unserviceable', abbreviations: 'u/s' },
                    { status: 'AU', modifier: 'Not available (specify reason if appropriate)', abbreviations: 'not avbl' },
                    { status: 'AW', modifier: 'Completely withdrawn', abbreviations: 'withdrawn' },
                    { status: 'AX', modifier: 'Previously promulgated shutdown has been cancelled', abbreviations: 'promulgated shutdown cnl ' },
               ]
          },
          {
               code: 'C', condition: 'Changes', list: [
                    { status: 'CA', modifier: 'Activated', abbreviations: 'act' },
                    { status: 'CC', modifier: 'Completed', abbreviations: 'cmpl' },
                    { status: 'CD', modifier: 'Deactivated', abbreviations: 'deactivated' },
                    { status: 'CE', modifier: 'Erected', abbreviations: 'erected' },
                    { status: 'CF', modifier: 'Operating frequency(ies) changed to', abbreviations: 'opr freq changed to' },
                    { status: 'CG', modifier: 'Downgraded to', abbreviations: 'downgraded to' },
                    { status: 'CH', modifier: 'Changed', abbreviations: 'changed' },
                    { status: 'CI', modifier: 'Identification or radio call sign changed to', abbreviations: 'ident/rdo call sign changed to' },
                    { status: 'CL', modifier: 'Realigned', abbreviations: 'realigned' },
                    { status: 'CM', modifier: 'Displaced', abbreviations: 'displaced' },
                    { status: 'CN', modifier: 'Cancelled', abbreviations: 'cnl' },
                    { status: 'CO', modifier: 'Operating', abbreviations: 'opr' },
                    { status: 'CP', modifier: 'Operating on reduced power', abbreviations: 'opr reduced pwr' },
                    { status: 'CR', modifier: 'Temporarily replaced by', abbreviations: 'tempo rplcd by' },
                    { status: 'CS', modifier: 'Installed', abbreviations: 'instl' },
                    { status: 'CT', modifier: 'On test, do not use', abbreviations: 'on test, do not use' },
               ]
          },
          {
               code: 'H', condition: 'Hazard Conditions', list: [
                    { status: 'HA', modifier: 'Braking action is . . .', abbreviations: 'ba is...' }, // 1) Poor 2) Medium/Poor 3) Medium 4) Medium/Good 5) Good
                    { status: 'HB', modifier: 'Friction coefficient is . . . (specify friction measuring device used)', abbreviations: 'friction coefficient is' },
                    { status: 'HC', modifier: 'Covered by compacted snow to a depth of', abbreviations: 'cov compacted sn depth' },
                    { status: 'HD', modifier: 'Covered by dry snow to a depth of', abbreviations: 'cov dry sn depth' },
                    { status: 'HE', modifier: 'Covered by water to a depth of', abbreviations: 'cov water depth' },
                    { status: 'HF', modifier: 'Totally free of snow and ice', abbreviations: 'free of sn and ice' },
                    { status: 'HG', modifier: 'Grass cutting in progress', abbreviations: 'grass cutting inpr' },
                    { status: 'HH', modifier: 'Hazard due to (specify)', abbreviations: 'hazard due' },
                    { status: 'HI', modifier: 'Covered by ice', abbreviations: 'cov ice' },
                    { status: 'HJ', modifier: 'Launch planned . . . ', abbreviations: 'launch plan' },
                    { status: 'HK', modifier: 'Bird migration in progress (specify direction)', abbreviations: 'bird migration inpr' },
                    { status: 'HL', modifier: 'Snow clearance completed', abbreviations: 'sn clr cmpl' },
                    { status: 'HM', modifier: 'Marked by', abbreviations: 'marked by' },
                    { status: 'HN', modifier: 'Covered by wet snow or slush to a depth of', abbreviations: 'cov wet sn/slush depth' },
                    { status: 'HO', modifier: 'Obscured by snow', abbreviations: 'obscured by sn' },
                    { status: 'HP', modifier: 'Snow clearance in progress', abbreviations: 'sn clr inpr' },
                    { status: 'HQ', modifier: 'Operation cancelled . . . (specify balloon flight identification or project code name)', abbreviations: 'opr cnl' },
                    { status: 'HR', modifier: 'Standing water', abbreviations: 'standing water' },
                    { status: 'HS', modifier: 'Sanding in progress', abbreviations: 'sanding inpr' },
                    { status: 'HT', modifier: 'Approach according to signal condition only', abbreviations: 'apch according signal' },
                    { status: 'HU', modifier: 'Launch in progress . . .', abbreviations: 'launch inpr' },
                    { status: 'HV', modifier: 'Work completed', abbreviations: 'work cmpl' },
                    { status: 'HW', modifier: 'Work in progress', abbreviations: 'wip' },
                    { status: 'HX', modifier: 'Concentration of birds', abbreviations: 'bird concentration' },
                    { status: 'HY', modifier: 'Snow banks exist (specify height)', abbreviations: 'sn banks hgt' },
                    { status: 'HZ', modifier: 'Covered by frozen ruts and ridges', abbreviations: 'cov frozen ruts and ridges' },
               ]
          },
          {
               code: 'L', condition: 'Limitations', list: [
                    { status: 'LA', modifier: 'Operating on auxiliary power supply', abbreviations: 'opr aux pwr' },
                    { status: 'LB', modifier: 'Reserved for aircraft based therein', abbreviations: 'reserved for acft based therein' },
                    { status: 'LC', modifier: 'Closed', abbreviations: 'clsd' },
                    { status: 'LD', modifier: 'Unsafe', abbreviations: 'unsafe' },
                    { status: 'LE', modifier: 'Operating without auxiliary power supply', abbreviations: 'opr aux wo pwr' },
                    { status: 'LF', modifier: 'Interference from', abbreviations: 'interference fm' },
                    { status: 'LG', modifier: 'Operating without identification', abbreviations: 'opr wo ident' },
                    { status: 'LH', modifier: 'Unserviceable for aircraft heavier than', abbreviations: 'u/s acft heavier than' },
                    { status: 'LI', modifier: 'Closed to IFR operations', abbreviations: 'clsd ifr ops' },
                    { status: 'LK', modifier: 'Operating as a fixed light', abbreviations: 'opr as f lgt' },
                    { status: 'LL', modifier: 'Usable for length of . . . and width of . . .', abbreviations: 'usable len.../wid...' },
                    { status: 'LN', modifier: 'Closed to all night operations', abbreviations: 'clsd to all ngt ops' },
                    { status: 'LP', modifier: 'Prohibited to', abbreviations: 'prohibited to' },
                    { status: 'LR', modifier: 'Aircraft restricted to runways and taxiways', abbreviations: 'acft restricted to rwy and twy' },
                    { status: 'LS', modifier: 'Subject to interruption', abbreviations: 'subj intrp' },
                    { status: 'LT', modifier: 'Limited to', abbreviations: 'ltd to' },
                    { status: 'LV', modifier: 'Closed to VFR operations', abbreviations: 'clsd vfr ops' },
                    { status: 'LW', modifier: 'Will take place', abbreviations: 'will take place' },
                    { status: 'LX', modifier: 'Operating but caution advised due to', abbreviations: 'opr but ctn advised due to' },
               ]
          },
          {
               code: 'T', condition: 'Trigger', list: [
                    { status: 'TT', modifier: 'Trigger' }   // needs review
               ]
          },
          {
               code: 'X', condition: 'Other', list: [
                    { status: 'XX', modifier: 'Plain language' }
               ]
          },
     ];

     let errors = [];

     // conversions
     function clean(text) {
          //text = text.replace(/[^\x20-\x7E]/gmi, ' '); //replace line breaks with spaces
          text = text.replace(/[\r\n]+/gm, ' ');
          return text.replace(/^\s+|\s+$|\s+(?=\s)/g, '');
          //return text.replace(/[^\x20-\x7E]/gmi, ' ').trim().replace('  ', ' ');
     }

     function convertDMSToDD(degrees, minutes, seconds, direction) {
          var dd = degrees + minutes / 60 + seconds / (60 * 60);
          if (direction == "S" || direction == "W") {
               dd = dd * -1;
          }
          return +dd.toFixed(6);
     }

     function getISODateString(str, format) {
          if (format === 'YYMMDDHHmm')
               return new Date(Date.UTC(+ String(new Date().getFullYear()).substring(0, 2) + str.substring(0, 2), +str.substring(2, 4), +str.substring(4, 6), +str.substring(6, 8), +str.substring(8, 10), 0)).toISOString();
     }

     //GLIDER FLYING (PARAGLIDING WORLD CUP) WILL TAKE PLACE ON AREA (MANTEIGAS): 
     // 405500N 0073000W (VILA DA PONTE) - 
     // 405735N 0065231W (ESCALHAO) - ALONG PORTUGUESE/SPANISH BOUNDARY - 
     // 393950N 0073230W (MONTE FIDALGO) - 
     // 402500N 075000W (TRAVANCINHA) - 
     // 405500N 0073000W (VILA DA PONTE).


     // returns a array of coordinates in a text
     function findCoordinates(str) {
          const text = clean(str);
          let res = [];
          if (text.length >= 15) {
               // ex: 402500N 075000W             (15)
               for (let index = 0; index < text.length - 15; index++) {
                    if ((text[index + 6] == 'N' || text[index + 6] == 'S') && (text[index + 14] == 'W' || text[index + 14] == 'E')) {
                         if (!isNaN(text.substring(index, index + 6)) && !isNaN(text.substring(index + 7, index + 14))) {
                              const c = getCoords(text.substring(index, index + 15));
                              if (c != null)
                                   res.push(c);
                         }
                    }
               }
               // ex: 412644N 0083144W           (16)
               for (let index = 0; index < text.length - 16; index++) {
                    if ((text[index + 6] == 'N' || text[index + 6] == 'S') && (text[index + 15] == 'W' || text[index + 15] == 'E')) {
                         if (!isNaN(text.substring(index, index + 6)) && !isNaN(text.substring(index + 7, index + 15))) {
                              const c = getCoords(text.substring(index, index + 16));
                              if (c != null)
                                   res.push(c);
                         }
                    }
               }
               // ex: 411415.07N 0083700.29W     (22)
               for (let i = 0; i < text.length - 22; i++) {
                    if ((text[i + 9] == 'N' || text[i + 9] == 'S') && (text[i + 21] == 'W' || text[i + 21] == 'E')) {
                         if (!isNaN(text.substring(i, i + 6)) && !isNaN(text.substring(i + 11, i + 18)) && text.substring(i + 6, i + 7) == '.' && text.substring(i + 18, i + 19) == '.') {
                              const c = getCoords(text.substring(i, i + 22));
                              if (c != null)
                                   res.push(c);
                         }
                    }
               }
          }
          return res;
     }

     // returns a [lat,lng] from most common notam coordinate formats
     function getCoords(coordinates) {
          if (coordinates.length === 14) {   //ex: 4025N00404W999
               const lat = convertDMSToDD(+coordinates.substring(0, 2), +coordinates.substring(2, 4), 0, coordinates.substring(4, 5));
               const lng = convertDMSToDD(+coordinates.substring(5, 8), +coordinates.substring(8, 10), 0, coordinates.substring(10, 11));
               return [[lat, lng], { radius: +coordinates.substring(11, 14) }];
          } if (coordinates.length === 15) { // // ex: 402500N 075000W             (15)
               const lat = convertDMSToDD(+coordinates.substring(0, 2), +coordinates.substring(2, 4), +coordinates.substring(4, 6), coordinates.substring(6, 7));
               const lng = convertDMSToDD(+coordinates.substring(8, 10), +coordinates.substring(10, 12), +coordinates.substring(12, 14), coordinates.substring(14, 15));
               return [lat, lng];
          } if (coordinates.length === 16) { // ex: 280944N 0152630W  (16)
               const lat = convertDMSToDD(+coordinates.substring(0, 2), +coordinates.substring(2, 4), +coordinates.substring(4, 5), coordinates.substring(5, 16));
               const lng = convertDMSToDD(+coordinates.substring(8, 11), +coordinates.substring(11, 13), +coordinates.substring(13, 15), coordinates.substring(15, 16));
               return [lat, lng];
          } if (coordinates.length === 22) { // ex: 411415.07N 0083700.29W     (22)
               const lat = convertDMSToDD(+coordinates.substring(0, 2), +coordinates.substring(2, 4), +coordinates.substring(4, 9), coordinates.substring(9, 10));
               const lng = convertDMSToDD(+coordinates.substring(11, 14), +coordinates.substring(14, 16), +coordinates.substring(16, 21), coordinates.substring(21, 22));
               return [lat, lng];
          }
          else {
               return null;
          }
     }

     function getPurpose(purpose) {
          var res = [];
          for (const c of purpose) {
               switch (c) {
                    case 'N':
                         res.push({ code: c, description: 'Selected for the immediate attention to aircraft operators' });
                         break;
                    case 'O':
                         res.push({ code: c, description: 'Operationally significant for IFR flights' });
                         break;
                    case 'B':
                         res.push({ code: c, description: 'For inclusion in Preflight Infomation Bulletins' });
                         break;
                    case 'M':
                         res.push({ code: c, description: 'Miscellaneous information' });
                         break;
                    case 'K':
                         res.push({ code: c, description: 'Checklist' });
                         break;
                    default:
                         break;
               }
          }
          return res;
     }

     function getScope(scope) {
          var res = [];
          for (const c of scope) {
               switch (c) {
                    case 'A':
                         res.push({ code: c, description: 'Aerodrome' });
                         break;
                    case 'E':
                         res.push({ code: c, description: 'En-route information' });
                         break;
                    case 'W':
                         res.push({ code: c, description: 'Navigational warnings' });
                         break;
                    case 'K':
                         res.push({ code: c, description: 'Checklist' });
                         break;
                    default:
                         break;
               }
          }
          return res;
     }

     function getTraffic(traffic) {
          var res = [];
          for (const c of traffic) {
               switch (c) {
                    case 'I':
                         res.push({ code: c, description: 'IFR Traffic' });
                         break;
                    case 'V':
                         res.push({ code: c, description: 'VFR Traffic' });
                         break;
                    case 'K':
                         res.push({ code: c, description: 'Checklist' });
                         break;
                    default:
                         break;
               }
          }
          return res;
     }

     // converts raw notam to simple object
     function convertMessage(msg) {
          let mappings = [];
          ['Q', 'A', 'B', 'C', 'D', 'E', 'F', 'G'].forEach(code => {
               if (msg.indexOf('\n' + code + ')') > -1) {
                    mappings.push({ code: code, index: msg.indexOf('\n' + code + ')') });
               } else if (msg.indexOf(' ' + code + ')') > -1) {
                    mappings.push({ code: code, index: msg.indexOf(' ' + code + ')') });
               }
          });
          if (mappings.length == 0)
               return;

          var res = {
               header: msg.substring(0, mappings[0].index)
          };
          for (let i = 0; i < mappings.length; i++) {
               let content = (i < mappings.length - 1) ? msg.substring(mappings[i].index + 3, mappings[i + 1].index) : msg.substring(mappings[i].index + 3);
               res[mappings[i].code.toLowerCase()] = content.trim();
          }
          return res;
     }

     // convert header
     function parseHeader(line) {
          var obj = {};
          var cols = line.split(' ');
          if (cols.length > 0) {
               const id = cols[0];
               obj.id = id;
               if (id.length == 8) {
                    obj.series = id.substring(0, 1);
                    obj.number = id.substring(1, 5);
                    obj.year = id.substring(6, 9);
               }
               if (cols.length > 1) {
                    const type = cols[1];
                    obj.type = type;
                    if (type === 'NOTAMN') {
                         obj.typeDesc = 'New NOTAM';
                    } else if (type === 'NOTAMR') {
                         obj.typeDesc = 'Replacement NOTAM';
                         obj.idToReplace = cols[2];
                    } else if (type === 'NOTAMC') {
                         obj.typeDesc = 'Cancellation NOTAM';
                         obj.idToCancel = cols[2];
                    }
               }
          }
          return obj;
     }
     // convert Q line to Object
     function parseQualificationLine(q) {
          let qualifier = {
               line: q
          };
          const cols = q.split('/');
          if (cols.length == 8) {
               const location = cols[0];
               const code = cols[1].substr(1, 4);
               const subjectCategoryCode = cols[1].substr(1, 1);
               const subjectCode = cols[1].substr(1, 2);
               const modifierCategoryCode = cols[1].substr(3, 1);
               const modifierCode = cols[1].substr(3, 5);
               const traffic = cols[2];
               const purpose = cols[3];
               const scope = cols[4];
               const lower = cols[5];
               const upper = cols[6];
               const coordinates = cols[7];

               // process
               qualifier.location = location; // TODO: see 2.3.5.2 of https://www.eurocontrol.int/sites/default/files/publication/files/OPADD_Ed4.0_v01.00.pdf
               qualifier.code = { code };

               if (subjectCategoryCode === 'K') {
                    // console.warn('Checklist', cols);
               } else {
                    // subject
                    qualifier.code.entity = subjectCode;
                    qualifier.code.status = modifierCode;

                    if (subjects) {
                         const subjectCategory = subjects.find(c => c.code === subjectCategoryCode);
                         if (subjectCategory != null) {
                              if (subjectCategory.area != null) qualifier.code.area = subjectCategory.area;
                              if (subjectCategory.subArea != null) qualifier.code.subArea = subjectCategory.subArea;
                              const subject = subjectCategory.subjects.find(ca => ca.entity === subjectCode);
                              if (subject != null) {
                                   if (subject.subject != null) qualifier.code.subject = subject.subject;
                              } else {
                                   console.warn('Unable to find subject with code ', subjectCode);
                              }
                         } else {
                              console.warn('Unable to find subject category with code ', subjectCategoryCode);
                         }
                    }
                    if (modifiers) {
                         const modifierCategory = modifiers.find(c => c.code === modifierCategoryCode);
                         if (modifierCategory != null) {
                              if (modifierCategory.condition != null) qualifier.code.condition = modifierCategory.condition;
                              const modifier = modifierCategory.list.find(m => m.status === modifierCode);
                              if (modifier != null) {
                                   if (modifier.status != null) qualifier.code.status = modifier.status;
                                   if (modifier.modifier != null) qualifier.code.modifier = modifier.modifier;
                              } else {
                                   console.warn('Unable to find modifier with code ', modifierCode);
                              }
                         } else {
                              console.warn('Unable to find modifier category with code ', modifierCategoryCode, cols);
                         }
                    }
               }

               qualifier.traffic = getTraffic(traffic);
               qualifier.purpose = getPurpose(purpose);
               qualifier.scope = getScope(scope);
               // coordinates
               const c = getCoords(coordinates);
               if (c != null) {
                    qualifier.coordinates = c;
               }
               // limits
               if (lower != null || upper != null) {
                    qualifier.limits = {};
                    if (lower != null) qualifier.limits.lower = lower;
                    if (upper != null) qualifier.limits.upper = upper;
               }
          } else {
               console.warn('qualifier line has wrong number of fields');
          }
          return qualifier;
     }

     function parseSchedule(b, c, d) {
          var res = {
               activityStart: null,
               validityEnd: null
          };
          // activity
          const bCols = b.split(' ');
          if (bCols.length > 0) {
               res.activityStart = getISODateString(bCols[0], 'YYMMDDHHmm');
               if (bCols.length > 1) {
                    if (bCols[1] == 'EST') { // ‘WIE’, ‘SR’ or ‘SS’
                         res.activityEstimated = true;
                    }
               }
          }
          // validityEnd
          const cCols = c.split(' ');
          if (cCols.length > 0) {
               if (cCols[0] == 'PERM') {
                    res.permanent = true;
               } else {
                    res.validityEnd = getISODateString(cCols[0], 'YYMMDDHHmm');
               }
               if (cCols.length > 1) {
                    if (cCols[1] == 'EST') {
                         res.estimated = true;
                    }
               }
          }

          if (d) {
               const data = d.split('EXC');
               const groups = data[0].split(',');
               const exceptions = (data.length == 2) ? data[1].split(',') : null;

               if (groups.length > 0) {
                    res.elements = [];
                    groups.forEach(element => {
                         res.elements.push(clean(element));
                    });
               }
               if (exceptions != null) {
                    res.exceptions = [];
                    exceptions.forEach(exception => {
                         res.exceptions.push(clean(exception));
                    });
               }
          }

          return res;
     }

     function parseContent(e) {
          let res = {
               text: e
          };

          console.log(e);

          //search for circles
          if (e.search('RADIUS') != -1) {
               //console.log(e);
          } {
               const coordinates = findCoordinates(e);
               if (coordinates.length > 0) {
                    res.area = coordinates;
               }
          }

          return res;
     }

     function parseLimits(f, g) {
          // AGL or SFC or AMSL
          if (f != null || g != null) {
               var res = {};
               if (f != null) {
                    const cols = f.split('\n');
                    res.lower = cols[0];
               }
               if (g != null) {
                    const cols = g.split('\n');
                    res.upper = cols[0];
               }
               return res;
          }
          return null;
     }

     var notamDecoder = {};

     // converts to json
     notamDecoder.decode = function (message) {
          //reset
          errors.length = 0;
          message = message.replace(/\\n/g, '\n');

          // check input
          if (typeof (message) === 'string' && message.trim() !== '') {
               var n = convertMessage(message);
               if (n != null) {
                    var res = {
                         header: parseHeader(n.header),
                         qualification: parseQualificationLine(n.q),
                         schedule: parseSchedule(n.b, n.c, n.d),
                         content: parseContent(n.e)
                    }
                    if (n.f != null || n.g != null)
                         res.limits = parseLimits(n.f, n.g);
                    return res;
               } else errors.push('Unable to convert input message');

          } else errors.push('Invalid input message');


          // error
          if (errors.length > 0) {
               return {
                    errors,
                    ts: new Date().toISOString()
               };
          }
     };

     // export as Node module / AMD module / browser variable
     if (typeof exports === 'object' && typeof module !== 'undefined') module.exports = notamDecoder;
     else if (typeof define === 'function' && define.amd) define(notamDecoder);
     else window.notamDecoder = notamDecoder;

}());