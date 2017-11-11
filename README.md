# DotHeader
A "pixel like" header design

Step001: Create a matrix of "dots" that will in a wrapper of any dimension.

Step002: Add some variety or non-uniformity to the "dots" so it's not a sheet of one single color.

Step003: I want the display to feel more active and be obvious that the user can interact with it. So, I'm going to simulate random pixels being clicked which hopefully triggers the css hover sudo property, setting the opacity to 1.0 temporarily. 

Step004: I want to be able to pass in a "mask" which lays out a pattern to be displayed.

UPDATE: This was a no go... I created an array, laying out a pattern using "1" as normal dot and "2" as the alternative. Css rules made the alternative dots a different color which presented the pattern. This looked great in Edge and Firefox but Chrome freaked out, weird rendering issues that jumped across the whole wrapper at random. Something to try again in the future but for now it's a no go.

Step005: The functionality is as far as I can take this one for now but the coding is a bit sloppy yet. Going to clean it up, make it a bit more functional and easier to use on an actual site.

NOTE: DotHeader doesn't really explain what it is or the idea behind it anymore. Going forward any ref to this code will be as a "Pixelated Overlay" or something to that end.