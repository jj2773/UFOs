# UFO Sightings
## Overview
It was desired to create an attractive webpage that allowed for exploration of UFO sightings data by entering filter criteria by Date, City, State, Country, and Shape.  The webpage is created by defining a json object of the data as seen in the data.js file.  Additionally, the index.html file defines the html layout of the page while leveraging bootstrap style sheets.  The style.css file is also used to place the image used and background color.  

Note that the index.html file also references an important script from the web enabling the D3 toolset. The interactivity of the webpage for filtering was done using the app.js file which leverages the D3.  

## Results
The webpage loads with the full data table displayed and a nice image and background as seen in the below image.

![alt text](https://github.com/jj2773/UFOs/blob/main/results1.PNG)

After the user enters a filter search item in any of the filters the table automatically adjusts to show only those records.  You can see below that by selecting the city el cajon that the table was filtered.

![alt text](https://github.com/jj2773/UFOs/blob/main/cityfiltering.PNG)

If the user selects an additional criteria the table will filter further while keeping previous filter selections.  As seen in the below image, an additional filter of shape was added to the previous city filtering.

![alt text](https://github.com/jj2773/UFOs/blob/main/cityandshapefiltering.PNG)

Lastly, to return the table to the unfiltered state either refresh the page or click the upper left corner text "UFO Sightings".

## Summary
The webpage meets the basic criteria desired, but one drawback might be if the dataset became very large.  As coded currently the entire data set is being displayed which may be a problem as the data grows.  Further D3 tools should be explored for rendering the table partially.  Also, the page should be divided to allow scrolling through the data while keeping visibility to page title and image.


