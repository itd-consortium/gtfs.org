---
layout: default
---

{% for page in examples %}
  {{ page.content }}
{% endfor %}

# Welcome to GTFS.org

## Overview

The General Transit Feed Specification (GTFS), also known as GTFS Static to differentiate it from its companion [GTFS Realtime](https://developers.google.com/transit/gtfs-realtime/) extension, defines a common format for public transportation schedule, geographic and fare information. GTFS "feeds" let public transit agencies publish data in a format that can be consumed and utilized in applications in an interoperable way.

GTFS data is available for more than 1350 public transportation providers. An estimated hundreds of applications utilize interoperable GTFS data. This website includes the GTFS reference (core specification), best practices for GTFS data, getting started guide, and links to other resources.

For further background on GTFS, see “[Pioneering Open Data Standards: The GTFS Story](http://beyondtransparency.org/chapters/part-2/pioneering-open-data-standards-the-gtfs-story/)” (Beyond Transparency).

## GTFS Reference

The GTFS reference defines all files, fields, and relationships of GTFS datasets. There are currently two official reference documents:

   * [On GitHub](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md) - This represents the most up-to-date version of the Specification, and also shows proposed amendments as [pull requests](https://github.com/google/transit/pulls).
   * [At developers.google.com](https://developers.google.com/transit/gtfs/reference/) - This version of the Specification is sometimes less up-to-date than that hosted at GitHub, but is translated into multiple languages.

## GTFS Best Practices

The GTFS reference alone does not precisely define how to describe all aspects of transit service. [GTFS Best Practices]( {{ "/best-practices" | prepend: site.baseurl }} ) supplement the GTFS reference to provide clear directions to feed publishers and improve consistency of data structure across feeds.

## How do I start?
  1. Take a look at the GTFS examples.
  2. Create your own feeds using the [reference](#gtfs-reference) and [best practices](best-practices) as a guide.
  3. Test your feed using [validation tools]( {{ "/testing" | prepend: site.baseurl }} ).
  4. [Publish your feed]( {{ "/getting-started/#making-a-transit-feed-publicly-available" | prepend: site.baseurl }}), as described in the Help Center.

See getting started on this site for a more complete guide.
