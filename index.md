---
layout: homepage
---
<section id="gtfs-overview" class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>General Transit Feed Specification</h1>
      </div>
      <div class="col-xs-12 col-lg-6">

        <p>The General Transit Feed Specification (GTFS) defines an open standard format for exchanging public transportation schedule, geographic and fare information. GTFS “feeds” let public transit agencies publish data in a format that can be consumed and utilized in applications in an interoperable way. The original GTFS format (sometimes referred to as GTFS Static) describes scheduled service. Its companion GTFS Realtime format is used to communicate arrival predictions, vehicle positions, and services advisories. At present, this site is mostly concerned with the GTFS Static format. GTFS data is available for more than 1350 public transportation providers, and hundreds of applications utilize interoperable GTFS data.</p>

      </div>
      
        <small><a href="gtfs-background/">More GTFS background</a></small>

      </div>
    </div>
  </div>
</section>

<nav class="navbar col-xs-12">
  <div class="navbar-header row">
    <button type="button" data-target="#main-nav" class="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false">
      Menu
    </button>
  </div>

  <div id="main-nav" class="waypoints navbar-collapse collapse row">
    <ul class="nav navbar-nav">
      <li><a href="{{ "/" | prepend: site.baseurl }}"><span>Home</span><div class="dot"></div></a></li>
      <li><a href="{{ "/getting-started" | prepend: site.baseurl }}">Getting Started<div class="dot"></div></a></li>
      <li><a href="{{ "/testing" | prepend: site.baseurl }}">Testing Feeds<div class="dot"></div></a></li>
      <li><a href="{{ "/reference" | prepend: site.baseurl }}">Spec Reference<div class="dot"></div></a></li>
      <li><a href="{{ "/examples" | prepend: site.baseurl }}">Examples<div class="dot"></div></a></li>
      <li><a href="{{ "/best-practices" | prepend: site.baseurl }}">Best Practices<div class="dot"></div></a></li>
    </ul>
  </div>
</nav>

<section id="how-do-i-start">
  <div class="container">
    <div class="col-xs-12 col-lg-6">
      <h2>How do I start?</h2>
      <ol>
        <li>Take a look at the <a href="/examples">GTFS data examples</a>.</li>
        <li>Create your own feeds using the <a href="/reference">reference</a> and <a href="/best-practices">best practices</a> as a guide. <a href="/best-practices">GTFS Best Practices</a> supplement the GTFS reference to provide clear directions to feed publishers and improve consistency of data structure across feeds.</li>
        <li>Test your feed using <a href="/testing">validation tools</a>.</li>
        <li><a href="/getting-started/#making-a-transit-feed-publicly-available">Publish your feed</a>, as described in the Help Center.</li>
      </ol>
      <p>See <a href="/getting-started">Getting Started</a> for a more complete guide.</p>
    </div>
  </div>
</section>
