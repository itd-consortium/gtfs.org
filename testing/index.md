---
layout: default
---
# Testing GTFS Feeds

## GTFS

* Use the [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) tool to verify that your feed data file matches the specification defined in this document.
* Use the [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer) application to see your feed data represented on a map. This is not representative of how your data will look in other applications; it is a basic tool for testing. Examine routes and schedules to ensure that the data feed correctly represents your system.
* Conveyal has a [GTFS validator](https://github.com/conveyal/gtfs-validator) based on the OneBusAway GTFS modules.
* [GFTS Data Package Specification](https://github.com/Stephen-Gates/GTFS) - A [Data Package specification](http://specs.frictionlessdata.io/data-packages/) with validation accomplished with Good Tables. Includes a data package, schemas, tests, and uses South East Queensland GTFS data as an example.

### For software developers:

* Conveyal's [gtfs-lib](https://github.com/conveyal/gtfs-lib) library contains validation functionality.
* The [Chouette project](https://github.com/afimb/chouette) (managed by the French Agency for Multimodal Information and Ticketing) contains validation functionality and can translate between various formats.

## GTFS-realtime

* [GTFS-realtime Validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) - A tool created by the Center for Urban Transportation at the University of South Florida to verify that your real-time feed data correctly matches your GTFS dataset and contains all required information.  You can [run the software yourself](https://github.com/CUTR-at-USF/gtfs-realtime-validator#quick-start---run-it-yourself), or you can try the version [hosted by USF](http://transittools.forest.usf.edu/).

### For software developers:

* [gtfs-realtime-validator-lib](https://github.com/CUTR-at-USF/gtfs-realtime-validator/tree/master/gtfs-realtime-validator-lib) - A library that you can use to integrate GTFS-realtime validation rules into your own software.  See the [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) for an example of using the gtfs-realtime-validator-lib library in another project.
* [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - A tool that can run GTFS-realtime validation on a large number of GTFS-realtime feeds, using the directory of known public feeds from [TransitFeeds.com](http://transitfeeds.com/).
