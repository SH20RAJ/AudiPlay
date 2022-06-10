
<p><span style="font-size: medium;">&nbsp;</span></p><table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center;"><a href="https://1.bp.blogspot.com/-_pNGRfKhrOY/YDEmYVlt9dI/AAAAAAAAAjs/ev6XuuMm8xo9CD3_bOC74Wl5L7kueNnQACLcBGAsYHQ/s256/logo.png" style="margin-left: auto; margin-right: auto;"><span style="font-size: medium;"><img border="0" data-original-height="256" data-original-width="256" src="https://1.bp.blogspot.com/-_pNGRfKhrOY/YDEmYVlt9dI/AAAAAAAAAjs/ev6XuuMm8xo9CD3_bOC74Wl5L7kueNnQACLcBGAsYHQ/s0/logo.png" /></span></a></td></tr><tr><td class="tr-caption" style="text-align: center;"><span style="font-size: medium;">AudiPlay - HTML5 Audio Player</span></td></tr></tbody></table><span style="font-size: medium;"></span><p></p><p style="text-align: center;"><span style="font-size: x-large;">AudiPlay Integration - Free HTML5 Audio Player</span></p>


<span style="font-size: medium;"></span><div style="text-align: center;"></div><div style="text-align: center;"><span style="font-size: medium;"></span></div><div style="text-align: center;"><span style="font-size: medium;"></span></div><div style="text-align: center;"><span style="font-size: large;">See GitHub :-&nbsp;<span color="rgba(0, 0, 0, 0.87)" face="Roboto, Noto, sans-serif" style="white-space: pre-wrap;"><a href="https://github.com/SH20RAJ/AudiPlay">https://github.com/SH20RAJ/AudiPlay</a></span></span></div><span style="font-size: medium;">
  
  See Integration Article :- https://codexdindia.blogspot.com/2021/02/audiplay-integration-free-html5-audio.html

---
  AudiPlayV2 <3 :- https://www.youtube.com/watch?v=wyaoy8uB3aE

</span><p style="text-align: center;"><span style="font-size: medium;"><br /></span></p><p style="text-align: center;"><span style="font-size: large;">Steps To Integrate</span></p><p><span style="font-size: medium;"><span>&nbsp; &nbsp; Step 1 :-&nbsp;</span>Use&nbsp;<span style="background-color: #1e1e1e; color: #9cdcfe; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">class</span><span style="background-color: #1e1e1e; color: #d4d4d4; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">=</span><span style="background-color: #1e1e1e; color: #ce9178; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">"audiplay"</span>&nbsp;in Your Audio Tag .</span></p><p><span style="font-size: medium;"><br /></span></p><div class="block section ng-scope" data-pos="1" ng-if="is_sidebar === undefined || is_sidebar == !!section.sidebar" ng-repeat="(k, section) in sections" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; color: #474a54; font-family: &quot;Open Sans&quot;, sans-serif; margin: 0px 0px 20px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline;"><div ng-switch="section.type" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="ng-scope" ng-switch-when="code" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="block-code block-show-code ng-isolate-scope ng-valid" ng-model="section.data" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border-radius: 3px; border: 0px; box-sizing: border-box; margin: 0px 0px 20px; outline: 0px; padding: 3px; vertical-align: baseline;" type="section.type"><div class="code-tabs" style="background: 0px 0px white; border: 0px; box-sizing: border-box; margin: -1px 0px 0px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline; z-index: 10;"><div class="ng-scope tab on" ng-class="{tab: true, on:$index==current, off:$index!=current}" ng-repeat="tab in data.codes track by $id($index)" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #bbbbbb; display: inline-block; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span class="ng-binding ng-scope" ng-if="!tab.status" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #ce2025; display: inline-block; font-weight: 700; margin: 0px; outline: 0px; padding: 2px 5px 5px; vertical-align: baseline;"><span style="font-size: medium;">HERE IS THE AUDIO TAG</span></span></div></div></div></div></div></div><p><span style="font-size: medium;"><span><span>&nbsp; &nbsp; 
  
```
<audio controls class="audiplay" >
     <source
     src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/Ark.mp3"
     type="audio/mp3"/>
</audio>
<!--Here is the Audio Tag Library-->
```
  
  
  </span></span></span><p></p><p><span style="font-size: medium;"><span><span><br /></span></span></span></p><p><span style="font-size: medium;"><span><span>Step 2 :- Add Javascript CDN Just Before&nbsp;</span></span><span style="color: grey; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">&lt;/</span><span style="color: #569cd6; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">body</span><span style="color: grey; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">&gt; </span>Tag</span></p><p><span style="font-size: medium;"><br /></span></p><div class="block section ng-scope" data-pos="1" ng-if="is_sidebar === undefined || is_sidebar == !!section.sidebar" ng-repeat="(k, section) in sections" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; color: #474a54; font-family: &quot;Open Sans&quot;, sans-serif; margin: 0px 0px 20px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline;"><div ng-switch="section.type" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="ng-scope" ng-switch-when="code" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="block-code block-show-code ng-isolate-scope ng-valid" ng-model="section.data" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border-radius: 3px; border: 0px; box-sizing: border-box; margin: 0px 0px 20px; outline: 0px; padding: 3px; vertical-align: baseline;" type="section.type"><div class="code-tabs" style="background: 0px 0px white; border: 0px; box-sizing: border-box; margin: -1px 0px 0px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline; z-index: 10;"><div class="ng-scope tab on" ng-class="{tab: true, on:$index==current, off:$index!=current}" ng-repeat="tab in data.codes track by $id($index)" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #bbbbbb; display: inline-block; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span class="ng-binding ng-scope" ng-if="!tab.status" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #ce2025; display: inline-block; font-weight: 700; margin: 0px; outline: 0px; padding: 2px 5px 5px; vertical-align: baseline;"><span style="font-size: medium;">HERE IS THE JAVASCRIPT CDN</span></span></div></div></div></div></div></div>


```
<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script>
<!--Here is the JavaScript Library-->
```


<p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">You can also Use Style Attribute in your Audio Tag i.e. -:&nbsp;<span style="background-color: #1e1e1e; color: #d4d4d4; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">&nbsp;</span><span style="background-color: #1e1e1e; color: #9cdcfe; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">style</span><span style="background-color: #1e1e1e; color: #d4d4d4; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">=</span><span style="background-color: #1e1e1e; color: #ce9178; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">"</span><span style="background-color: #1e1e1e; color: #ce9178; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">width:&nbsp;700px;</span><span style="background-color: #1e1e1e; color: #ce9178; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">"</span>&nbsp;and You Will Get Responsive Audio Player .</span></p><table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center;"><a href="https://1.bp.blogspot.com/-az7XMaTr12Y/YDEsxAKNOAI/AAAAAAAAAj4/3np_RXRA3-gC9OQaLN-L73dPij8mEubUACLcBGAsYHQ/s893/Before%2BAdding%2BAudiPlayer.PNG" style="margin-left: auto; margin-right: auto;"><span style="font-size: medium;"><img border="0" data-original-height="183" data-original-width="893" height="132" src="https://1.bp.blogspot.com/-az7XMaTr12Y/YDEsxAKNOAI/AAAAAAAAAj4/3np_RXRA3-gC9OQaLN-L73dPij8mEubUACLcBGAsYHQ/w640-h132/Before%2BAdding%2BAudiPlayer.PNG" width="640" /></span></a></td></tr><tr><td class="tr-caption" style="text-align: center;"><span style="font-size: medium;">Before Adding AudiPlay - Free HTML5 Audio Player</span></td></tr></tbody></table><span style="font-size: medium;"><br /><br /><br /><br /><br /></span><table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center;"><a href="https://1.bp.blogspot.com/-Z_cISx35hIY/YDEsyM0PtII/AAAAAAAAAj8/_KuMVOonOzUSqIeJvpFR-dTeajhTZ5WAQCLcBGAsYHQ/s846/After%2BAdding%2BAudiPlayer.PNG" style="margin-left: auto; margin-right: auto;"><span style="font-size: medium;"><img border="0" data-original-height="135" data-original-width="846" height="102" src="https://1.bp.blogspot.com/-Z_cISx35hIY/YDEsyM0PtII/AAAAAAAAAj8/_KuMVOonOzUSqIeJvpFR-dTeajhTZ5WAQCLcBGAsYHQ/w640-h102/After%2BAdding%2BAudiPlayer.PNG" width="640" /></span></a></td></tr><tr><td class="tr-caption" style="text-align: center;"><span style="font-size: medium;">After Adding AudiPlay - Free HTML5 Audio Player</span></td></tr></tbody></table><span style="font-size: medium;"><br /></span><p><span style="font-size: medium;"><br /></span></p><p style="text-align: center;"><span style="font-size: medium;">What You Can Do&nbsp;</span></p><p><span style="font-size: medium;">Add&nbsp;<span style="background-color: #1e1e1e; color: #9cdcfe; font-family: Consolas, &quot;Courier New&quot;, monospace; white-space: pre;">nodownload</span>&nbsp;Attribute to Your Audio Tag To <b>disable the Download Button .</b></span></p><p><span style="font-size: medium;"><b><br /></b></span></p><p><span style="font-size: medium;"><b><br /></b></span></p><p><b><span style="font-size: medium;">Like This -</span></b></p><div class="block section ng-scope" data-pos="1" ng-if="is_sidebar === undefined || is_sidebar == !!section.sidebar" ng-repeat="(k, section) in sections" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; color: #474a54; font-family: &quot;Open Sans&quot;, sans-serif; margin: 0px 0px 20px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline;"><div ng-switch="section.type" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="ng-scope" ng-switch-when="code" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="block-code block-show-code ng-isolate-scope ng-valid" ng-model="section.data" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border-radius: 3px; border: 0px; box-sizing: border-box; margin: 0px 0px 20px; outline: 0px; padding: 3px; vertical-align: baseline;" type="section.type"><div class="code-tabs" style="background: 0px 0px white; border: 0px; box-sizing: border-box; margin: -1px 0px 0px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline; z-index: 10;"><div class="ng-scope tab on" ng-class="{tab: true, on:$index==current, off:$index!=current}" ng-repeat="tab in data.codes track by $id($index)" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #bbbbbb; display: inline-block; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span class="ng-binding ng-scope" ng-if="!tab.status" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #ce2025; display: inline-block; font-weight: 700; margin: 0px; outline: 0px; padding: 2px 5px 5px; vertical-align: baseline;"><span style="font-size: medium;">HERE IS THE AUDIO TAG</span></span></div></div><div class="ng-scope" ng-repeat="tab in data.codes track by $id($index)" ng-show="$index==current" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><pre class="cm-s-neo" data-mode="html" ng-if="data.codes[$index].code != &quot;&quot;" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border-radius: 4px; border: 1px solid rgb(204, 204, 204); box-shadow: rgb(238, 238, 238) 0px 0px 0px 3px; box-sizing: border-box; color: #4d4d4c; font-family: Monaco, Menlo, Consolas, &quot;courier new&quot;, monospace; line-height: 1.42857; margin-bottom: 0px; margin-top: 0px; outline: 0px; overflow-wrap: break-word; overflow: auto; padding: 10px; position: relative; vertical-align: baseline; white-space: pre-wrap; word-break: break-all;"><div style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; color: #d4d4d4; font-family: Consolas, &quot;Courier New&quot;, monospace; line-height: 19px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline; white-space: pre;"><div style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; line-height: 19px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span style="font-size: medium;"><span style="background: 0px 0px white; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;">&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="color: grey;">&lt;</span><span style="color: #569cd6;">audio</span><span style="color: #d4d4d4;">&nbsp;</span><span style="color: #9cdcfe;">controls</span><span style="color: #d4d4d4;">&nbsp;</span><span style="color: #9cdcfe;">class</span><span style="color: #d4d4d4;">=</span><span style="color: #ce9178;">"audiplay"</span><span style="color: #d4d4d4;"> <b>nodownload</b></span><span style="color: grey;">&gt;</span></span></div><div><span style="font-size: medium;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: grey;">&lt;</span><span style="color: #569cd6;">source</span>&nbsp;<span style="color: #9cdcfe;">src</span>=<span style="color: #ce9178;">"Ark.mp3"</span>&nbsp;<span style="color: #9cdcfe;">type</span>=<span style="color: #ce9178;">"audio/mp3"</span><span style="color: grey;">&gt;</span></span></div><div><span style="font-size: medium;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: grey;">&lt;/</span><span style="color: #569cd6;">audio</span><span style="color: grey;">&gt;</span></span></div><div style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span style="background: 0px 0px white; border: 0px; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span style="font-size: medium;">&nbsp;&nbsp;&nbsp;&nbsp;<span style="background: 0px 0px; border: 0px; color: #6a9955; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;">&lt;!--Here&nbsp;is&nbsp;the&nbsp;Audio Tag&nbsp;Library--&gt;</span></span></span></div></div></div></pre></div></div></div></div></div><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">Now You Will Get -</span></p><table align="center" cellpadding="0" cellspacing="0" class="tr-caption-container" style="margin-left: auto; margin-right: auto;"><tbody><tr><td style="text-align: center;"><a href="https://1.bp.blogspot.com/-E3teJdXvoVI/YDEt_6Z9QEI/AAAAAAAAAkM/9LZVcPD12Hg3bzAlbDl-W_XcIetE44yPACLcBGAsYHQ/s582/After%2BDisableing%2BDownload%2Busing%2Bnodownload%2BAttribute.PNG" style="margin-left: auto; margin-right: auto;"><span style="font-size: medium;"><img border="0" data-original-height="137" data-original-width="582" height="123" src="https://1.bp.blogspot.com/-E3teJdXvoVI/YDEt_6Z9QEI/AAAAAAAAAkM/9LZVcPD12Hg3bzAlbDl-W_XcIetE44yPACLcBGAsYHQ/w523-h123/After%2BDisableing%2BDownload%2Busing%2Bnodownload%2BAttribute.PNG" width="523" /></span></a></td></tr><tr><td class="tr-caption" style="text-align: center;"><span style="font-size: medium;">After Disableing Download using nodownload Attribute</span></td></tr></tbody></table><span style="font-size: medium;"><br /></span><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;"><br /></span></p><p><span style="font-size: medium;">Here how the Total HTML will look like ...</span></p><p><span style="font-size: medium;"><br /></span></p><div class="block section ng-scope" data-pos="1" ng-if="is_sidebar === undefined || is_sidebar == !!section.sidebar" ng-repeat="(k, section) in sections" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; color: #474a54; font-family: &quot;Open Sans&quot;, sans-serif; margin: 0px 0px 20px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline;"><div ng-switch="section.type" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="ng-scope" ng-switch-when="code" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border: 0px; box-sizing: border-box; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><div class="block-code block-show-code ng-isolate-scope ng-valid" ng-model="section.data" style="background-attachment: initial; background-clip: initial; background-image: initial; background-origin: initial; background-position: 0px 0px; background-repeat: initial; background-size: initial; border-radius: 3px; border: 0px; box-sizing: border-box; margin: 0px 0px 20px; outline: 0px; padding: 3px; vertical-align: baseline;" type="section.type"><div class="code-tabs" style="background: 0px 0px white; border: 0px; box-sizing: border-box; margin: -1px 0px 0px; outline: 0px; padding: 0px; position: relative; vertical-align: baseline; z-index: 10;"><div class="ng-scope tab on" ng-class="{tab: true, on:$index==current, off:$index!=current}" ng-repeat="tab in data.codes track by $id($index)" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #bbbbbb; display: inline-block; margin: 0px; outline: 0px; padding: 0px; vertical-align: baseline;"><span class="ng-binding ng-scope" ng-if="!tab.status" style="background: 0px 0px; border: 0px; box-sizing: border-box; color: #ce2025; display: inline-block; font-weight: 700; margin: 0px; outline: 0px; padding: 2px 5px 5px; vertical-align: baseline;"><span style="font-size: medium;">HERE IS THE FULL HTML EXAMPLE</span></span></div></div></div></div></div></div><p>

</p>

```
<audio controls class="audiplay" style="width: 700px;">
 <source src="Ark.mp3" type="audio/mp3">
</audio>

<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script>
```

<p></p><p><br /></p>
