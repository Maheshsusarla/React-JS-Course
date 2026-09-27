# ⚛️ React Concepts — Notes & Examples

A collection of React core concepts explained with **real-world examples** and bilingual explanations.

---

## 📚 Topics Covered

- [Event Handling](#-event-handling)

---

## 🖱️ Event Handling

Event handling means responding to user actions — clicks, typing, scrolling, hovering — and running code when they happen.


### Real World Examples
| Example | Event Used |
|---|---|
| 🔑 Login Button | `onClick` |
| 🔍 Search Box (Amazon) | `onChange` |
| ❤️ Like Button (Instagram) | `onClick` |
| 📝 Form Submission | `onSubmit` |
| 🖼️ Hover to Zoom Product | `onMouseEnter` / `onMouseLeave` |
| 🔢 OTP Auto-Submit | `onKeyDown` |
| 🗑️ Delete Cart Item | `onClick` with arguments |

### Common Events Quick Reference
| Event | Trigger |
|---|---|
| `onClick` | Tapping a button/icon |
| `onChange` | Typing/selecting in input |
| `onSubmit` | Submitting a form |
| `onMouseEnter` / `onMouseLeave` | Hovering |
| `onKeyDown` / `onKeyUp` | Pressing keyboard keys |
| `onFocus` / `onBlur` | Clicking into/out of input |

```jsx
function LikeButton() {
  const [liked, setLiked] = useState(false);

  function handleLike() {
    setLiked(!liked);
  }

  return (
    <button onClick={handleLike}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
```

---

## 🛠️ Tech Stack
- React.js
- JSX

## 🙋 Author
Notes compiled for learning React fundamentals with practical, real-world context.

## 📄 License
Free to use for learning purposes.