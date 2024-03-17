Sure, here is the content converted into a `README.md` file format:

```markdown
[![](https://data.jsdelivr.com/v1/package/gh/SH20RAJ/AudiPlay/badge)](https://www.jsdelivr.com/package/gh/SH20RAJ/AudiPlay)

---

# AudiPlay - HTML5 Audio Player

AudiPlay Integration - Free HTML5 Audio Player

---

## See GitHub:
[https://github.com/SH20RAJ/AudiPlay](https://github.com/SH20RAJ/AudiPlay)

## See Integration Article:
[https://codexdindia.blogspot.com/2021/02/audiplay-integration-free-html5-audio.html](https://codexdindia.blogspot.com/2021/02/audiplay-integration-free-html5-audio.html)

---

## AudiPlay version 2 with multiple audio support <3
- [Documentation](https://www.youtube.com/watch?v=wyaoy8uB3aE)
- [GitHub Repo](https://github.com/SH20RAJ/AudiPlayV2/)

---

## Steps To Integrate

**Step 1:**
Use `class="audiplay"` in Your Audio Tag.

```html
<audio controls class="audiplay">
    <source src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay@old/Ark.mp3" type="audio/mp3"/>
</audio>
```

**Step 2:**
Add Javascript CDN Just Before `</body>` Tag.

```html
<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay@old/audiplay.min.js"></script>
```

**Additional:**
You can also use the `style` attribute in your Audio Tag for a responsive player.

---

## What You Can Do

Add `nodownload` Attribute to Your Audio Tag To **disable the Download Button**.

**Example:**

```html
<audio controls class="audiplay" nodownload>
    <source src="Ark.mp3" type="audio/mp3">
</audio>
```

---

### Before Adding AudiPlay - Free HTML5 Audio Player
![Before Adding AudiPlay - Free HTML5 Audio Player](https://1.bp.blogspot.com/-az7XMaTr12Y/YDEsxAKNOAI/AAAAAAAAAj4/3np_RXRA3-gC9OQaLN-L73dPij8mEubUACLcBGAsYHQ/w640-h132/Before%2BAdding%2BAudiPlayer.PNG)

---

### After Adding AudiPlay - Free HTML5 Audio Player
![After Adding AudiPlay - Free HTML5 Audio Player](https://1.bp.blogspot.com/-Z_cISx35hIY/YDEsyM0PtII/AAAAAAAAAj8/_KuMVOonOzUSqIeJvpFR-dTeajhTZ5WAQCLcBGAsYHQ/w640-h102/After%2BAdding%2BAudiPlayer.PNG)

---

### After Disabling Download using `nodownload` Attribute
![After Disabling Download using `nodownload` Attribute](https://1.bp.blogspot.com/-E3teJdXvoVI/YDEt_6Z9QEI/AAAAAAAAAkM/9LZVcPD12Hg3bzAlbDl-W_XcIetE44yPACLcBGAsYHQ/w523-h123/After%2BDisableing%2BDownload%2Busing%2Bnodownload%2BAttribute.PNG)

---

### Here's an example of the full HTML:
```html
<audio controls class="audiplay" style="width: 700px;">
    <source src="Ark.mp3" type="audio/mp3">
</audio>

<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay@old/audiplay.min.js"></script>
```

---

## Conclusion

Now you have a fully functional HTML5 Audio Player integrated with AudiPlay!
