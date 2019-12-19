#!/usr/bin/env bash

# Exit script if you try to use an uninitialized variable.
set -o nounset

# Exit script if a statement returns a non-true return value.
set -o errexit

# Use the error status of the first failure, rather than that of the last item in a pipeline.
set -o pipefail

rm -rf repos
# GTFS Static
git clone https://github.com/google/transit.git repos/transit
mkdir -p src/pages/en/reference/static
PAGE=src/pages/en/reference/static/index.md
cp repos/transit/gtfs/spec/en/reference.md $PAGE
echo -en "---\npath: /reference/static/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE
if [ "${OSTYPE//[0-9.]/}" == "darwin" ]; then
    sed -i '' -e 's%../../CHANGES.md%/reference/static/changes%g' $PAGE
else
    sed -i -e 's%../../CHANGES.md%/reference/static/changes%g' $PAGE
fi

PAGE=src/pages/en/reference/static/changes.md
cp repos/transit/gtfs/CHANGES.md $PAGE
echo -en "---\npath: /reference/static/changes/\nlang: en\n---\n$(cat $PAGE)" > $PAGE

# GTFS Realtime v2
mkdir -p src/pages/en/reference/realtime/v2
PAGE=src/pages/en/reference/realtime/v2/index.md
cp repos/transit/gtfs-realtime/spec/en/reference.md $PAGE
echo -en "---\npath: /reference/realtime/v2/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

PAGE=src/pages/en/reference/realtime/changes.md
cp repos/transit/gtfs-realtime/CHANGES.md $PAGE
echo -en "---\npath: /reference/realtime/changes/\nlang: en\n---\n$(cat $PAGE)" > $PAGE

mkdir -p src/pages/es/reference/realtime/v2
PAGE=src/pages/es/reference/realtime/v2/index.md
cp repos/transit/gtfs-realtime/spec/es/reference.md $PAGE
echo -en "---\npath: /es/reference/realtime/v2/\nlang: es\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

# GTFS Realtime v1
git -C repos/transit checkout tags/v1.0
mkdir -p src/pages/en/reference/realtime/v1
PAGE=src/pages/en/reference/realtime/v1/index.md
cp repos/transit/gtfs-realtime/spec/en/reference.md $PAGE
echo -en "---\npath: /reference/realtime/v1/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

mkdir -p src/pages/es/reference/realtime/v1
PAGE=src/pages/es/reference/realtime/v1/index.md
cp repos/transit/gtfs-realtime/spec/es/reference.md $PAGE
echo -en "---\npath: /es/reference/realtime/v1/\nlang: es\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE

# Best Practices
git clone https://github.com/MobilityData/gtfs-best-practices.git -b docsv2 --single-branch repos/best-practices
BEST_PRACTICES_FILES=(introduction faq publishing all-files agency stops routes trips stop_times calendar calendar_dates fare_attributes fare_rules shapes feed_info frequencies transfers loop-routes lasso-routes branches about)

mkdir -p src/pages/en/best-practices
PAGE=src/pages/en/best-practices/index.md
rm -f $PAGE
touch $PAGE
echo -en "---\npath: /best-practices/\nlang: en\ntemplate: doc-page\n---\n$(cat $PAGE)" > $PAGE
for i in "${BEST_PRACTICES_FILES[@]}"
do
    cat repos/best-practices/en/$i.md >> $PAGE
done
# Remove existing lang tags
if [ "${OSTYPE//[0-9.]/}" == "darwin" ]; then
    sed -i '' -e ':a' -e 'N' -e '$!ba' -e 's/---\nlang: en\n\n---/ /g' $PAGE
else
    sed -i -e ':a' -e 'N' -e '$!ba' -e 's/---\nlang: en\n\n---/ /g' $PAGE
fi
# Copy images
find repos/best-practices/en -name \*.svg -exec cp {} src/pages/en/best-practices \;
