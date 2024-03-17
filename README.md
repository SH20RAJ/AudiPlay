

[![](https://data.jsdelivr.com/v1/package/gh/SH20RAJ/AudiPlay/badge)](https://www.jsdelivr.com/package/gh/SH20RAJ/AudiPlay)

# AudiPlay - HTML5 Audio Player

AudiPlay Integration - Free HTML5 Audio Player

---

AudiPlay version 2 with multiple audio support <3 :- [Documentation](https://www.youtube.com/watch?v=wyaoy8uB3aE) | [GitHub Repo](https://github.com/SH20RAJ/AudiPlayV2/)

---

## See GitHub

[https://github.com/SH20RAJ/AudiPlay](https://github.com/SH20RAJ/AudiPlay)

## Integration Article

[https://codexdindia.blogspot.com/2021/02/audiplay-integration-free-html5-audio.html](https://codexdindia.blogspot.com/2021/02/audiplay-integration-free-html5-audio.html)

---

## Steps To Integrate

### Step 1: Use `class="audioplay"` in Your Audio Tag

```html
<audio controls class="audioplay">
    <source src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/Ark.mp3" type="audio/mp3">
</audio>
<!-- Here is the Audio Tag Library -->
```

### Step 2: Add JavaScript CDN Just Before `</body>` Tag

```html
<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script>
<!-- Here is the JavaScript Library -->
```

### Optional: Use Style Attribute for Responsive Audio Player

You can use the `style` attribute in your Audio tag for a responsive audio player.

```html
<audio controls class="audioplay" style="width: 700px;">
    <source src="Ark.mp3" type="audio/mp3">
</audio>
```

---

## Additional Features

### Disable Download Button

Add `nodownload` attribute to your Audio Tag to disable the Download Button.

#### Example:

```html
<audio controls class="audioplay" nodownload>
    <source src="Ark.mp3" type="audio/mp3">
</audio>
```

---

## Preview

### Before Adding AudiPlay

![Before Adding AudiPlay](https://1.bp.blogspot.com/-az7XMaTr12Y/YDEsxAKNOAI/AAAAAAAAAj4/3np_RXRA3-gC9OQaLN-L73dPij8mEubUACLcBGAsYHQ/w640-h132/Before%2BAdding%2BAudiPlayer.PNG)

### After Adding AudiPlay

![After Adding AudiPlay](https://1.bp.blogspot.com/-Z_cISx35hIY/YDEsyM0PtII/AAAAAAAAAj8/_KuMVOonOzUSqIeJvpFR-dTeajhTZ5WAQCLcBGAsYHQ/w640-h102/After%2BAdding%2BAudiPlayer.PNG)

### After Disabling Download with `nodownload` Attribute

![After Disabling Download](https://1.bp.blogspot.com/-E3teJdXvoVI/YDEt_6Z9QEI/AAAAAAAAAkM/9LZVcPD12Hg3bzAlbDl-W_XcIetE44yPACLcBGAsYHQ/w523-h123/After%2BDisableing%2BDownload%2Busing%2Bnodownload%2BAttribute.PNG)

---

## Full HTML Example

```html
<audio controls class="audioplay" style="width: 700px;">
    <source src="Ark.mp3" type="audio/mp3">
</audio>

<script src="https://cdn.jsdelivr.net/gh/sh20raj/AudiPlay/audiplay.min.js"></script>
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to modify this Project as needed for your project!
