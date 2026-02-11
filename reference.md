# 📔 Quick Reference

- [⌨️ Controls](#controls)
  - [Game Mode](#game-mode)
  - [Editor Mode](#editor-mode)
    - [3D Viewport Controls](#3d-viewport-controls)
    - [Shortcuts](#shortcuts)
- [🐛 Sprite Actions](#sprite-action-reference)
  - [💬 Message](#message)
    - [Text Effects](#text-effects)
  - [🚪 Teleport](#teleport)
  - [🔊 Sound](#sound)
  - [🎵 Music](#music)
  - [🪄 ChangeCharaSprite](#changecharasprite)
  - [❌ DeleteSprite](#deletesprite)
  - [🎩 PutSpriteOnHead](#putspriteonhead)
  - [🧢 ClearSpritesOnHead](#clearspritesonhead)
  - [🔄 RestartGame](#restartgame)
  - [⏲️ Wait](#wait)
  - [🖼️ Image](#image)
  - [✂️ Cut](#cut)

# ⌨️ Controls

## Game Mode

Controls when playing the game.

| Input                                 | Action         |
| ------------------------------------- | -------------- |
| Arrow Keys / WASD / Left Mouse (hold) | Move character |
| Space / Enter / Left Mouse            | Interact       |

## Editor Mode

Controls available while editing.

### 3D Viewport Controls

| Input                | Action                             |
| -------------------- | ---------------------------------- |
| Left Mouse           | 🧱 Place block / Sprite            |
| Right Mouse          | ❌ Delete block                    |
| Middle Mouse         | 🎥 Orbit camera                    |
| Shift + Middle Mouse | 🎥 Pan camera                      |
| Mouse Wheel          | 🎥 Zoom in/out                     |
| Shift (hold)         | ⏹️ Switch to layer drawing mode    |
| Shift (hold) + Q / E | ↕️ Go down / up a layer            |

### Shortcuts

| Input    | Action                        |
| -------- | ----------------------------- |
| Tab      | 🐛 Toggle block / sprite mode |
| F        | 🧱 Switch block type          |
| R        | 📐 Rotate slope               |
| Ctrl + S | 💾 Save session               |

# 🐛 Sprite Action Reference

Here's a list of all available actions in the scripting system.

## 💬 Message

Displays a message bubble with text.

| Parameter | Type    | Description                                                                                                          |
| --------- | ------- | -------------------------------------------------------------------------------------------------------------------- |
| `text`    | string  | The message text to display                                                                                          |
| `pitch`   | number  | (Optional) Pitch of the voice. Default: 0.9                                                                          |
| `voice`   | string  | (Optional) Voice sample. Can be "default", "piep" or "chomp". Default: "default"                                     |

### Text Effects

You can add special effects to portions of text by wrapping them in {curly braces} with an effect name:

| Effect     | Example                           | Description                          |
| ---------- | --------------------------------- | ------------------------------------ |
| wave       | `{wave}Hello{/wave}`              | Makes text wave up and down          |
| shake      | `{shake}Boo!{/shake}`             | Shakes text randomly                 |
| rainbow    | `{rainbow}(～o￣3￣)～{/rainbow}` | Cycles text through rainbow colors   |
| trans      | `{trans}trans rights{/trans}`     | Trans rights                         |
| quiet      | `{quiet}whispering{/quiet}`       | Makes text appear smaller and dimmed |
| upsidedown | `{upsidedown}flip{/upsidedown}`   | Flips text upside down               |
| pulse      | `{pulse}important{/pulse}`        | Makes text pulse in size             |
| blur       | `{blur}ghost{/blur}`              | Applies a blur effect to text        |

Example usage:

```typescript
Watch out for the {shake}spooky {rainbow}ghost{/rainbow}{/shake}!
```

## 🚪 Teleport

Teleports the player to a specified room and position.

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| `roomId`  | string | Target room identifier |
| `x`       | number | X coordinate           |
| `y`       | number | Y coordinate           |
| `z`       | number | Z coordinate           |

## 🔊 Sound

Plays a sound effect.

| Parameter | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| `soundID` | string  | Sound asset identifier                            |
| `wait`    | boolean | (Optional) Wait for completion before next action |

## 🎵 Music

Controls background music playback.

| Parameter | Type    | Description                                       |
| --------- | ------- | ------------------------------------------------- |
| `musicID` | string  | Music asset identifier (empty string stops music) |
| `loop`    | boolean | (Optional) Whether to loop the track              |

## 🪄 ChangeCharaSprite

Changes player character sprites.

| Parameter                | Type   | Description                    |
| ------------------------ | ------ | ------------------------------ |
| `idleSpriteGraphicID`    | string | Asset ID for idle animation    |
| `walkingSpriteGraphicID` | string | Asset ID for walking animation |

## ❌ DeleteSprite

Removes the calling sprite.

No parameters.

## 🎩 PutSpriteOnHead

Places calling sprite on player's head.

No parameters.

## 🧢 ClearSpritesOnHead

Removes all sprites from player's head.

No parameters.

## 🔄 RestartGame

Resets game to start.

## ⏲️ Wait

Pauses script execution.

| Parameter  | Type   | Description          |
| ---------- | ------ | -------------------- |
| `duration` | number | Wait time in seconds |

## 🖼️ Image

Displays an image with fade transitions.

| Parameter        | Type   | Description                  |
| ---------------- | ------ | ---------------------------- |
| `imageGraphicID` | string | Image asset identifier       |
| `fadeInTime`     | number | Fade in duration in seconds  |
| `fadeOutTime`    | number | Fade out duration in seconds |

## ✂️ Cut

Cuts directly to another room without changing the players position. Helpful when you want to quickly swap the room to a slightly changed version (i.e. swapping sprites).

| Parameter | Type   | Description            |
| --------- | ------ | ---------------------- |
| `roomId`  | string | Target room identifier |
