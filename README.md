# gtfs.org
Content for gtfs.org - Landing page for General Transit Feed Specification and GTFS Best Practices

# License

Except as otherwise noted, the content of this repository is licensed under the [Creative Commons Attribution 3.0 License](https://creativecommons.org/licenses/by/3.0/), and code samples are licensed under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).

# Editing site content
Data for the Best Practices, Core Reference, Merged View, and Realtime Reference documents are in separate repositories. To edit information in those documents, see the corresponding repository:

* [GTFS Core Reference](https://github.com/itd-consortium/gtfs-reference)
* [GTFS Best Practices](https://github.com/itd-consortium/gtfs-best-practices)
* [GTFS Realtime Reference](https://github.com/itd-consortium/gtfs-realtime)

For full site functionality, documents must be cloned into the file tree. After cloning the gtfs.org repo locally, use the following git commands to clone these documents into the file tree:

1. `git clone git@github.com:itd-consortium/gtfs-best-practices.git _best-practices`
2. `git clone git@github.com:itd-consortium/gtfs-reference.git _reference`
3. `git clone git@github.com:itd-consortium/gtfs-realtime.git realtime`

The site may be built with or without the above documents, using the following steps:

1. Ensure you have a recent version of Ruby
2. `bundle install`
3. `bundle exec jekyll serve`