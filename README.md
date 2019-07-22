# Resources

##  A Short Svelte 3 Tutorial

### Disclaimer

This repository was created as part of a presentation on Svelte that I gave to colleagues.

Note that I'm definitely no Svelte expert.  I've only been playing with it in my spare time for a couple of months.  So, my apologies if anything in here is incorrect or misleading.  Feel free to raise an issue or a PR if you think something should really be fixed.

Also, a number of the examples contain friendly digs at Angular, React and Vue.  That's just my sense of humour.  Please don't read anything into it.  They're all fine frameworks.  I've just been smitten by the simplicity and power of Svelte 3, and the jokes were really just to make my presentation a little less dry :smile:.

### How To Navigate

The branches of this repository contain simple examples that illustrate various aspects of Svelte 3.

If you check out **Step-01-Create-An-Empty-Application** and do an **npm i** and then leave **npm run dev** executing, you should be able to just check out each branch after that, and the code will get rebuilt automatically.

The branches whose titles include **Step-13** and **Step-14** are exceptions, in that they have external dependencies (one on D3 and the other on a Svelte routing package).  You'll need to kill the **npm run dev**, re-execute **npm i**, to install the dependency, and then **npm run dev** again.

### Better Sources Of Information

The best place to see a full overview of the functionality it provides is the official tutorial at https://svelte.dev/tutorial/basics.

The pages there explain things that you generally want from a framework, and how they're achieved with Svelte 3.  In particular, because it provides a REPL that runs the code, you can play around and see what effect your changes have.

There are various tabs on that site that provide different information:

- A set of examples https://svelte.dev/examples#hello-world
- The complete API (although, it's a work in progress) https://svelte.dev/docs
- A REPL, where you can just try stuff out https://svelte.dev/repl/hello-world
- The Svelte blog https://svelte.dev/blog
- An FAQ https://github.com/sveltejs/svelte/wiki/FAQ
- A link to the Sapper website https://sapper.svelte.dev/

## Some Excellent Introductory Videos

Here are a few videos I think explain the concepts behind Svelte well:

- Rich Harris's original introduction of the new version

  ​	https://www.youtube.com/watch?v=AdNJ3fydeao&t=11s

- Harry Wolff has a couple of videos where he plays with Svelte and Sapper as a newbie, and one where he interviews Rich

  ​	https://www.youtube.com/watch?v=TPVQ3M9b6CY

  ​	https://www.youtube.com/watch?v=RS1GpKxCoIA

  ​	https://www.youtube.com/watch?v=48gHuY4w0hY

- The **Svelte Master** YouTube channel has been working through each of the pieces of Svelte (and some Sapper), in short videos of just a few minutes each (32 videos at the time of writing)

  ​	https://www.youtube.com/watch?v=cU8ZPBKaEwU&list=PLcjHRSem_cvP440pjw79kB85Z_7Nn8VqZ

- One that's pretty cool is a guy creating a YouTube component.

  ​	https://www.youtube.com/watch?v=Ank3IdQHOuE

- There's a second video where he explains how to push it as a module to NPM.

  ​	https://www.youtube.com/watch?v=uapg3tstHSQ	

If you search for "Svelte 3" on YouTube, you'll find a lot more, including an example of using Svelte with GraphQL https://www.youtube.com/watch?v=WqOLx2yuF3M&t=159s and a half hour crash course https://www.youtube.com/watch?v=uK2RnIzrQ0M.

Anyway, my colleagues seemed to enjoy the presentation, so hopefully others will get some value from it.  Enjoy!

