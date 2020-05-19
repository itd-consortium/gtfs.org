---
path: /changes/
lang: en
---

## Changing GTFS
<hr>

GTFS is a community driven data format. Users can propse and vote on changes to the GTFS. For detailed information see the [GTFS-realtime](/reference/realtime/changes/) and [GTFS-static](/reference/static/changes) change processes. 


## Proposed Extensions
<hr>

### MobilityData

The MobilityData project has proposed GTFS extensions so that transit service features can be more completely represented. The specifications below are candidates for adoption into the official GTFS. 

##### [Fares](https://bit.ly/gtfs-fares)
Many transit systems have complex fare structures. Fares may vary based on transit mode, time of day, origin-destination pair, transfers, fare product or some combination of these factors. This extension expands the existing fares functionality to support many of these cases.

##### [Demand responsive transit](https://bit.ly/gtfs-drt)
Many transit agencies provide “flexible” or “demand responsive” services that do not operate on fixed routes, schedules or stops. This extension allows GTFS to describe these services.

##### Branding 
Consistent presentation of line, service, and operator branding attributes clearly differentiate components of a transit system, making the system easier to navigate. This extension would add support for a variety of branding attributes.

##### [Service Changes](https://bit.ly/gtfs-service-changes-v3_1)
GTFS currently has no way to represent service changes planned between one and seven days in advance. This extension allows these service changes to be reflected in GTFS-realtime.

##### [Pathways](https://bit.ly/gtfs-pathways)
Navigating large transit stations can be difficult and stressful, especially for riders in wheelchairs. Furthermore, maintenance, equipment malfunctions and other scheduled and unscheduled closures sometimes alter routes that riders must take within a station. This extension allows transit apps to dynamically route riders through stations.

##### Disallowed travel
Some intercity transit agencies have certain disallowed travel patterns in which an origin-destination pair is connected by the agency, but the agency will not sell tickets for that origin-destination pair. This extension allows these disallowed travel patterns to be specified.

##### [Vehicles](https://bit.ly/gtfs-vehicles)
Vehicles are fundamental to any transit system and in some cases agencies may need to provide information about specific vehicles. Occupancy status, amenities, bike capacity and boarding restrictions and accessibility are all useful information that riders may need. This extension allows GTFS to describe many vehicle properties.
