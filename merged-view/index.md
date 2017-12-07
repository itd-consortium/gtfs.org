---
layout: merged-view
---
# GTFS Merged View

## Introduction

This document contains sequential information from both the GTFS Core Reference and the GTFS Best Practices. The distinction between these two documents is as follows:

* **Core Reference**: The Specification Reference (or Core Reference) identifies the requirements for GTFS data. There is a higher threshold of agreement necessary for requirements to be added to the Specification Reference than the Best Practices.
* **Best Practices**: The Best Practices document represents the agreement of a broad group of GTFS-consuming applications on what constitutes high-quality GTFS data.

## Field Definitions {#field-definitions}

### agency.txt {#agency}

#### Core Reference
{{ site.reference | where: "slug", "agency" }}
#### Best Practices
{{ site.best-practices | where: "slug", "agency" }}

### stops.txt {#stops}

#### Core Reference
{{ site.reference | where: "slug", "stops" }}
#### Best Practices
{{ site.best-practices | where: "slug", "stops" }}

### routes.txt {#routes}

#### Core Reference
{{ site.reference | where: "slug", "routes" }}
#### Best Practices
{{ site.best-practices | where: "slug", "routes" }}

### trips.txt {#trips}

#### Core Reference
{{ site.reference | where: "slug", "trips" }}
#### Best Practices
{{ site.best-practices | where: "slug", "trips" }}

### stop_times.txt {#stop_times}

#### Core Reference
{{ site.reference | where: "slug", "stop_times" }}
#### Best Practices
{{ site.best-practices | where: "slug", "stop_times" }}

### calendar.txt {#calendar}

#### Core Reference
{{ site.reference | where: "slug", "calendar" }}
#### Best Practices
{{ site.best-practices | where: "slug", "calendar" }}

### calendar_dates.txt {#calendar_dates}

#### Core Reference
{{ site.reference | where: "slug", "calendar_dates" }}
#### Best Practices
{{ site.best-practices | where: "slug", "calendar_dates" }}

### fare_attributes.txt {#fare_attributes}

#### Core Reference
{{ site.reference | where: "slug", "fare_attributes" }}
#### Best Practices
{{ site.best-practices | where: "slug", "fare_attributes" }}

### fare_rules.txt {#fare_rules}

#### Core Reference
{{ site.reference | where: "slug", "fare_rules" }}
#### Best Practices
{{ site.best-practices | where: "slug", "fare_rules" }}

### shapes.txt {#shapes}

#### Core Reference
{{ site.reference | where: "slug", "shapes" }}
#### Best Practices
{{ site.best-practices | where: "slug", "shapes" }}

### frequencies.txt {#frequencies}

#### Core Reference
{{ site.reference | where: "slug", "frequencies" }}
#### Best Practices
{{ site.best-practices | where: "slug", "frequencies" }}

### transfers.txt {#transfers}

#### Core Reference
{{ site.reference | where: "slug", "transfers" }}
#### Best Practices
{{ site.best-practices | where: "slug", "transfers" }}

### feed_info.txt {#feed_info}

#### Core Reference
{{ site.reference | where: "slug", "feed_info" }}
#### Best Practices
{{ site.best-practices | where: "slug", "feed_info" }}
