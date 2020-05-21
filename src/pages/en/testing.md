---
path: /testing/
lang: en
---
# Feed Validators

Before publishing, GTFS feeds should be validated in order to catch errors. A number of different validation tools exist. Some tools check individual feeds while others are made to be integrated into software. 

## For GTFS-Static
<hr>

* [MobilityData gtfs-validator](https://github.com/MobilityData/gtfs-validator/blob/master/RELEASE.md) Verifies feed conformity to the official GTFS specification. At present, the software supports the validation of file structure and is ready for semantic validation. This tool is under active development.
* [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) - Verifies that the feed conforms to the requirements defined in the GTFS-static reference.
* [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer) - Visualizes geospatial and stop time feed data. This is not representative of how feed data will look in other applications; it is a basic tool for testing. Examine routes and schedules to ensure that the data feed correctly represents the system.
* [Conveyal GTFS validator](https://github.com/conveyal/gtfs-validator) - Based on the OneBusAway GTFS modules.
* [GFTS Data Package Specification](https://github.com/Stephen-Gates/GTFS) - A [Data Package specification](https://frictionlessdata.io/specs/data-package/) that does validation using Good Tables. Includes a data package, schemas, tests, and uses South East Queensland GTFS data as an example.

### For software developers:

* [Conveyal's gtfs-lib library](https://github.com/conveyal/gtfs-lib) - Contains validation functionality.
* [The Chouette project](https://github.com/afimb/chouette) - Managed by the French Agency for Multimodal Information and Ticketing. Contains validation functionality and can translate between various formats.

## GTFS-realtime
<hr>

* [GTFS-realtime Validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) - A tool created by the Center for Urban Transportation at the University of South Florida to verify that your real-time feed data correctly matches your GTFS dataset and contains all required information. 

### For software developers:

* [gtfs-realtime-validator-lib](https://github.com/CUTR-at-USF/gtfs-realtime-validator/tree/master/gtfs-realtime-validator-lib) - Integrates GTFS-realtime validation rules into software. See the transit-feed-quality-calculator for an example of using the gtfs-realtime-validator-lib library in another project.
* [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - Runs GTFS-realtime validation on a large number of GTFS-realtime feeds, using the directory of known public feeds from [TransitFeeds.com](http://transitfeeds.com/).
