---
layout: default
---
# Testing GTFS Feeds

The following Open Source tools are available for testing feeds in the GTFS format:

* Use the [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) tool to verify that your feed data file matches the specification defined in this document.
* Use the [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer) application to see your feed data represented on a map. This is not representative of how your data will look in other applications; it is a basic tool for testing. Examine routes and schedules to ensure that the data feed correctly represents your system.
* Conveyal has a [GTFS validator](https://github.com/conveyal/gtfs-validator) based on the OneBusAway GTFS modules.
* [GFTS Data Package Specification](https://github.com/Stephen-Gates/GTFS) - A [Data Package specification](http://specs.frictionlessdata.io/data-packages/) with validation accomplished with Good Tables. Includes a data package, schemas, tests, and uses South East Queensland GTFS data as an example.

For those with more software development expertise, these Open Source projects include components for validating GTFS:

* Conveyal's [gtfs-lib](https://github.com/conveyal/gtfs-lib) library contains validation functionality.
* The [Chouette project](https://github.com/afimb/chouette) (managed by the French Agency for Multimodal Information and Ticketing) contains validation functionality and can translate between various formats.
