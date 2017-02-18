---
layout: default
---

{% for page in examples %}
  {{ page.content }}
{% endfor %}

# About the General Transit Feed Specification (GTFS)

The General Transit Feed Specification (GTFS) defines an open standard format for exchanging public transportation schedule, geographic and fare information. GTFS “feeds” let public transit agencies publish data in a format that can be consumed and utilized in applications in an interoperable way. The original GTFS format (sometimes referred to as GTFS Static) describes scheduled service, and its companion GTFS Realtime format is used to communicate services alerts and disruptions as they happen. At present, this site is mostly concerned with the GTFS Static format.

GTFS data is available for more than 1350 public transportation providers, and hundreds of applications utilize interoperable GTFS data. This website includes the GTFS reference (core specification), best practices for GTFS data, getting started guide, and links to other resources.

Among public transportation data formats, GTFS stands out because it was conceived to meet specific, practical needs in communicating service information to passengers, not as an exhaustive vocabulary for managing operational details. It is designed to be relatively simple to create and read for both people and machines. Even organizations that work with highly detailed data internally using standards like [NeTEx](http://netex-cen.eu/) find GTFS useful as a way to publish data for wider consumption in consumer applications.

For further background on the origins of GTFS, see “[Pioneering Open Data Standards: The GTFS Story](http://beyondtransparency.org/chapters/part-2/pioneering-open-data-standards-the-gtfs-story/)” (Beyond Transparency).

## How do I start?
  1. Take a look at the [GTFS data examples](examples).
  2. Create your own feeds using the [reference](reference) and [best practices](best-practices) as a guide.  [GTFS Best Practices](best-practices) supplement the GTFS reference to provide clear directions to feed publishers and improve consistency of data structure across feeds.
  3. Test your feed using [validation tools](testing).
  4. [Publish your feed](getting-started/#making-a-transit-feed-publicly-available), as described in the Help Center.

See [getting started](getting-started) for a more complete guide.
