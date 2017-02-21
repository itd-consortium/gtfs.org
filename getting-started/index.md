---
layout: default
---
# Getting Started

## Overview

A GTFS feed is composed of a series of text files collected in a ZIP file. Each file models a particular aspect of transit information: stops, routes, trips, and other schedule data. The details of each file are defined in the GTFS reference.

See [GTFS Examples]( {{ "/examples" | prepend: site.baseurl }} ) for model feeds that illustrate GTFS usage. A transit agency can produce a GTFS feed to share their public transit information with developers, who write tools that consume GTFS feeds to incorporate public transit information into their applications. GTFS can be used in a variety of applications & processes (see [GTFS Applications](#gtfs-applications), below).

## Making a Transit Feed Publicly Available

Many [applications](#gtfs-applications) are compatible with data in the GTFS format. The simplest way to make a feed public is to host it on a web server. Developers and consuming applications can download GTFS data from the specified URL.

The best method to quickly share a GTFS dataset with a large number of developers is to register the zip file URL via websites that serve as the primary global directories of publicly accessible GTFS data:

* [TransitFeeds.com](https://transitfeeds.com/) ([submit data feed](https://github.com/TransitFeeds/TransitFeeds-Public/issues))
* [Transitland feed registry](https://transit.land/feed-registry/) ([submit data feed](https://transit.land/feed-registry/feeds/new))
* [TransitWiki.org](https://www.transitwiki.org/TransitWiki/index.php/Publicly-accessible_public_transportation_data) - “Publicly-accessible public transportation data”

## GTFS Applications

A partial directory of the many applications that consume and utilize GTFS data is maintained at [TransitWiki](https://www.transitwiki.org/TransitWiki/index.php/Category:GTFS-consuming_applications).

Many types of applications consume GTFS data, including:

* [Trip planning and maps](https://www.transitwiki.org/TransitWiki/index.php/Category:Trip-planning_%26_navigation_applications) – applications that assist a in planning journeys from one location to another using public transportation and other modes
* [Timetable creation](https://www.transitwiki.org/TransitWiki/index.php/Category:Timetable_generation_software) – to create a printed list of the agency’s schedule in a timetable format
* [Accessibility](https://www.transitwiki.org/TransitWiki/index.php/Category:Accessibility_devices_and_applications) – applications that assist transit riders with disabilities in using public transportation
* [Planning & analysis](https://www.transitwiki.org/TransitWiki/index.php/Category:Network_planning_software) – applications that assist transit professionals in assessing the current or planned transit network, including ridership forecasting
* [Real-time transit information](https://www.transitwiki.org/TransitWiki/index.php/Category:Real-time_applications) – applications that use GTFS data along with a real-time information source to provide estimated arrival information to transit riders
* [Public Information Displays](https://www.transitwiki.org/TransitWiki/index.php/Category:Public_information_displays) - Electronic displays to show schedule information, service advisories, real-time arrivals and/or other information

See also: [applications and services for creating and maintaining GTFS data](https://www.transitwiki.org/TransitWiki/index.php/General_Transit_Feed_Specification#Creating_and_Maintaining_a_GTFS_Dataset).

## Getting Help & Community

### Mailing Lists

There are a number of mailing lists that can be good resources when you have questions about public transit data, software, formats like GTFS and GTFS-realtime, and other issues:

* [GTFS Changes](https://groups.google.com/group/gtfs-changes): discussion of proposal for extending the GTFS specification, as outlined in the [GTFS Changes document](https://developers.google.com/transit/gtfs/changes).
* [Transit Developers](https://groups.google.com/group/transit-developers): general transit developer discussions. Many transit agencies also have their own developer mailing lists specific to the agency. For example:
  * [NYC MTA](https://groups.google.com/group/mtadeveloperresources)
  * [Portland, OR](https://groups.google.com/group/transit-developers-pdx)
  * [BART - San Francisco, CA](https://groups.google.com/group/bart-developers)
  * [MassDOT](https://groups.google.com/group/massdotdevelopers)
  * [Atlanta, GA region](https://groups.google.com/forum/#!forum/atl-transit-developers)
  * [511 San Francisco Bay Area Developer Resources](https://groups.google.com/forum/#!forum/511sfbaydeveloperresources)
* Check with your local transit agency to see if they have a mailing list of their own.
