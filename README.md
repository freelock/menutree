# menutree
POC for new LedgerSMB menu

[See example here.](https://freelock.github.io/menutree/)

This is just an example to see about replacing the current dijit/Tree menu in LedgerSMB with a Vue-based one.
The motivation for this is that dijit/Tree is causing tests to fail under FF/Chrome -- and we are looking at moving to 
a Vue.js based front end, from Dojo.

The code here is just to see if we can drop in a replacement without having to put in a full new build system, so it's not using
more typical Vue components -- normally I would create these components as .vue files instead of JS modules. With a .vue file,
there would be <template>, <script>, and <style> sections -- in this module version, the template is exported as a template 
property on the base module export instead, and no embedded style.

So this approach would be temporary for dealing with the single menu component -- when we switch to an SPA, we would move over
to Webpack and use more traditional .vue files...
