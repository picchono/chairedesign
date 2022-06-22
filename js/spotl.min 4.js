(function(){"use strict";pe=document.createElement("style"),pe.innerHTML="@keyframes pulsate{0%,to{opacity:1}50%{opacity:.2}}#spotlight{position:fixed;top:-1px;bottom:-1px;width:100%;z-index:99999;color:#fff;background-color:#000;opacity:0;overflow:hidden;-webkit-user-select:none;-ms-user-select:none;user-select:none;transition:opacity .2s ease-out;font-family:Arial,sans-serif;font-size:16px;font-weight:400;contain:strict;touch-action:none;pointer-events:none}#spotlight.show{opacity:1;transition:none;pointer-events:auto}#spotlight.white{color:#212529;background-color:#fff}#spotlight.white .spl-next,#spotlight.white .spl-page~*,#spotlight.white .spl-prev,#spotlight.white .spl-spinner{filter:invert(1)}#spotlight.white .spl-progress{background-color:rgba(0,0,0,.35)}#spotlight.white .spl-footer,#spotlight.white .spl-header{background-color:rgba(255,255,255,.65)}#spotlight.white .spl-button{background:#212529;color:#fff}.spl-footer,.spl-header{background-color:rgba(0,0,0,.45)}#spotlight .contain,#spotlight .cover{object-fit:cover;height:100%;width:100%}#spotlight .contain{object-fit:contain}#spotlight .autofit{object-fit:none;width:auto;height:auto;max-height:none;max-width:none;transition:none}.spl-scene,.spl-spinner,.spl-track{width:100%;height:100%;position:absolute}.spl-track{contain:strict}.spl-spinner{background-position:center;background-repeat:no-repeat;background-size:42px;opacity:0}.spl-spinner.spin{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAzOCAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBzdHJva2U9IiNmZmYiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMSAxKSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2Utb3BhY2l0eT0iLjY1Ij48Y2lyY2xlIHN0cm9rZS1vcGFjaXR5PSIuMTUiIGN4PSIxOCIgY3k9IjE4IiByPSIxOCIvPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOCI+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMTggMTgiIHRvPSIzNjAgMTggMTgiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIi8+PC9wYXRoPjwvZz48L2c+PC9zdmc+);transition:opacity .2s linear .25s;opacity:1}.spl-spinner.error{background-image:url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjMyIiB3aWR0aD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsMUExNSwxNSwwLDEsMCwzMSwxNiwxNSwxNSwwLDAsMCwxNiwxWm0wLDJhMTMsMTMsMCwwLDEsOC40NSwzLjE0TDYuMTQsMjQuNDVBMTMsMTMsMCwwLDEsMTYsM1ptMCwyNmExMywxMywwLDAsMS04LjQ1LTMuMTRMMjUuODYsNy41NUExMywxMywwLDAsMSwxNiwyOVoiIGlkPSJiYW5fc2lnbl9jcm9zc2VkX2NpcmNsZSIvPjwvc3ZnPg==);background-size:128px;transition:none;opacity:.5}.spl-scene{transition:transform .65s cubic-bezier(.1,1,.1,1);contain:layout size;will-change:transform}.spl-pane>*{position:absolute;width:auto;height:auto;max-width:100%;max-height:100%;left:50%;top:50%;margin:0;padding:0;border:0;transform:translate(-50%,-50%) scale(1);transition:transform .65s cubic-bezier(.3,1,.3,1),opacity .65s ease;contain:layout style;will-change:transform,opacity;visibility:hidden}.spl-header,.spl-pane,.spl-progress{position:absolute;top:0}.spl-pane{width:100%;height:100%;transition:transform .65s cubic-bezier(.3,1,.3,1);contain:layout size;will-change:transform,contents}.spl-header{width:100%;height:50px;text-align:right;transform:translateY(-100px);transition:transform .35s ease;overflow:hidden;will-change:transform}#spotlight.menu .spl-footer,#spotlight.menu .spl-header,.spl-footer:hover,.spl-header:hover{transform:translateY(0)}.spl-header div{display:inline-block;vertical-align:middle;white-space:nowrap;width:50px;height:50px;opacity:.5}.spl-progress{width:100%;height:3px;background-color:rgba(255,255,255,.45);transform:translateX(-100%);transition:transform linear}.spl-footer,.spl-next,.spl-prev{position:absolute;transition:transform .35s ease;will-change:transform}.spl-footer{left:0;right:0;bottom:0;line-height:20px;padding:20px 20px 0;padding-bottom:env(safe-area-inset-bottom,0);text-align:left;font-size:15px;font-weight:400;transform:translateY(100%)}.spl-title{font-size:15px}.spl-button,.spl-description,.spl-title{margin-bottom:20px}.spl-button{display:inline-block;background:#fff;color:#000;border-radius:5px;padding:10px 20px;cursor:pointer}.spl-next,.spl-page~*,.spl-prev{background-position:center;background-repeat:no-repeat}.spl-page{float:left;width:auto;line-height:50px}.spl-page~*{background-size:21px;float:right}.spl-fullscreen{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9Ii0xIC0xIDI2IDI2IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggM0g1YTIgMiAwIDAgMC0yIDJ2M20xOCAwVjVhMiAyIDAgMCAwLTItMmgtM20wIDE4aDNhMiAyIDAgMCAwIDItMnYtM00zIDE2djNhMiAyIDAgMCAwIDIgMmgzIi8+PC9zdmc+)}.spl-fullscreen.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyLjUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik04IDN2M2EyIDIgMCAwIDEtMiAySDNtMTggMGgtM2EyIDIgMCAwIDEtMi0yVjNtMCAxOHYtM2EyIDIgMCAwIDEgMi0yaDNNMyAxNmgzYTIgMiAwIDAgMSAyIDJ2MyIvPjwvc3ZnPg==)}.spl-autofit{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9Ijk2cHgiIHZpZXdCb3g9IjAgMCA5NiA5NiIgd2lkdGg9Ijk2cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggdHJhbnNmb3JtPSJyb3RhdGUoOTAgNTAgNTApIiBmaWxsPSIjZmZmIiBkPSJNNzEuMzExLDgwQzY5LjY3LDg0LjY2LDY1LjIzLDg4LDYwLDg4SDIwYy02LjYzLDAtMTItNS4zNy0xMi0xMlYzNmMwLTUuMjMsMy4zNC05LjY3LDgtMTEuMzExVjc2YzAsMi4yMSwxLjc5LDQsNCw0SDcxLjMxMSAgeiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSIgZmlsbD0iI2ZmZiIgZD0iTTc2LDhIMzZjLTYuNjMsMC0xMiw1LjM3LTEyLDEydjQwYzAsNi42Myw1LjM3LDEyLDEyLDEyaDQwYzYuNjMsMCwxMi01LjM3LDEyLTEyVjIwQzg4LDEzLjM3LDgyLjYzLDgsNzYsOHogTTgwLDYwICBjMCwyLjIxLTEuNzksNC00LDRIMzZjLTIuMjEsMC00LTEuNzktNC00VjIwYzAtMi4yMSwxLjc5LTQsNC00aDQwYzIuMjEsMCw0LDEuNzksNCw0VjYweiIvPjwvc3ZnPg==)}.spl-zoom-in,.spl-zoom-out{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjgiIHgyPSIxNCIgeTE9IjExIiB5Mj0iMTEiLz48L3N2Zz4=);background-size:22px}.spl-zoom-in{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMSIgY3k9IjExIiByPSI4Ii8+PGxpbmUgeDE9IjIxIiB4Mj0iMTYuNjUiIHkxPSIyMSIgeTI9IjE2LjY1Ii8+PGxpbmUgeDE9IjExIiB4Mj0iMTEiIHkxPSI4IiB5Mj0iMTQiLz48bGluZSB4MT0iOCIgeDI9IjE0IiB5MT0iMTEiIHkyPSIxMSIvPjwvc3ZnPg==)}.spl-download{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxNDEuNzMycHgiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDE0MS43MzIgMTQxLjczMiIgd2lkdGg9IjE0MS43MzJweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIwLjY3NCwxMjUuMTM4SDIwLjc5M3YxNi41OTRoOTkuODgxVjEyNS4xMzh6IE0xMTkuMDE5LDU4Ljc3NmMtMi41NjEtMi41NjItNi43MTYtMi41NjItOS4yNzUsMEw3Ny4yMSw5MS4zMTJWNi41NjIgICBDNzcuMjEsMi45MzYsNzQuMjY5LDAsNzAuNjQ4LDBjLTMuNjI0LDAtNi41NiwyLjkzNy02LjU2LDYuNTYzdjg0Ljc1TDMxLjk5Miw1OS4yMThjLTIuNTYyLTIuNTY0LTYuNzE1LTIuNTY0LTkuMjc3LDAgICBjLTIuNTY1LDIuNTYyLTIuNTY1LDYuNzE2LDAsOS4yNzlsNDMuMjk0LDQzLjI5M2MwLjE1LDAuMTU0LDAuMzE0LDAuMjk5LDAuNDgxLDAuNDM4YzAuMDc2LDAuMDYyLDAuMTU1LDAuMTEzLDAuMjM0LDAuMTc2ICAgYzAuMDk0LDAuMDY1LDAuMTg2LDAuMTQyLDAuMjc5LDAuMjA2YzAuMDk3LDAuMDYzLDAuMTkyLDAuMTE0LDAuMjg2LDAuMTc0YzAuMDg4LDAuMDU0LDAuMTc0LDAuMTA1LDAuMjY1LDAuMTUzICAgYzAuMSwwLjA1NiwwLjE5OSwwLjEsMC4yOTgsMC4xNDdjMC4wOTcsMC4wNDUsMC4xOSwwLjA5MSwwLjI4MywwLjEzMmMwLjA5OCwwLjA0LDAuMTk2LDAuMDcyLDAuMjk1LDAuMTA1ICAgYzAuMTA0LDAuMDM4LDAuMjA3LDAuMDc4LDAuMzEyLDAuMTA5YzAuMTAxLDAuMDMsMC4xOTcsMC4wNTIsMC4yOTcsMC4wNzdjMC4xMDgsMC4wMjMsMC4yMTQsMC4wNTgsMC4zMjQsMC4wNzggICBjMC4xMTUsMC4wMjEsMC4yMzEsMC4wMzMsMC4zNDYsMC4wNTRjMC4wOTcsMC4wMTUsMC4xOTIsMC4wMzIsMC4yODksMC4wNDJjMC40MywwLjA0MiwwLjg2NSwwLjA0MiwxLjI5NSwwICAgYzAuMS0wLjAxLDAuMTkxLTAuMDI3LDAuMjg5LTAuMDQyYzAuMTE0LTAuMDIxLDAuMjMzLTAuMDI5LDAuMzQ0LTAuMDU0YzAuMTA5LTAuMDIxLDAuMjE3LTAuMDU1LDAuMzI0LTAuMDc4ICAgYzAuMTAyLTAuMDI1LDAuMTk5LTAuMDQ3LDAuMjk5LTAuMDc3YzAuMTA1LTAuMDMxLDAuMjA3LTAuMDcxLDAuMzEyLTAuMTA5YzAuMTAyLTAuMDMsMC4xOTUtMC4wNjIsMC4yOTUtMC4xMDUgICBjMC4wOTYtMC4wNDEsMC4xOTEtMC4wODcsMC4yODMtMC4xMzJjMC4xLTAuMDQ4LDAuMTk5LTAuMDkyLDAuMjk3LTAuMTQ3YzAuMDkxLTAuMDQ4LDAuMTc3LTAuMTA0LDAuMjY0LTAuMTUzICAgYzAuMDk4LTAuMDYsMC4xOTMtMC4xMSwwLjI4Ny0wLjE3NGMwLjA5Ni0wLjA2NCwwLjE4OS0wLjE0MSwwLjI4MS0wLjIwNmMwLjA3Ni0wLjA2MiwwLjE1Ni0wLjExMywwLjIzMy0wLjE3NiAgIGMwLjI0OS0wLjIwNCwwLjQ3OS0wLjQzNywwLjY5NC0wLjY3YzAuMDc2LTAuMDY3LDAuMTU0LTAuMTMxLDAuMjI5LTAuMjAzbDQzLjI5NC00My4yOTYgICBDMTIxLjU4MSw2NS40OTEsMTIxLjU4MSw2MS4zMzcsMTE5LjAxOSw1OC43NzYiLz48L2c+PC9zdmc+);background-size:20px}.spl-theme{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBoZWlnaHQ9IjI0cHgiIHZlcnNpb249IjEuMiIgdmlld0JveD0iMiAyIDIwIDIwIiB3aWR0aD0iMjRweCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTIsNGMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFMxNi40MTgsNCwxMiw0eiBNMTIsMThjLTMuMzE0LDAtNi0yLjY4Ni02LTZzMi42ODYtNiw2LTZzNiwyLjY4Niw2LDYgUzE1LjMxNCwxOCwxMiwxOHoiLz48cGF0aCBkPSJNMTIsN3YxMGMyLjc1NywwLDUtMi4yNDMsNS01UzE0Ljc1Nyw3LDEyLDd6Ii8+PC9nPjwvc3ZnPg==)}.spl-play{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwb2x5Z29uIGZpbGw9IiNmZmYiIHBvaW50cz0iMTAgOCAxNiAxMiAxMCAxNiAxMCA4Ii8+PC9zdmc+)}.spl-play.on{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSItMC41IC0wLjUgMjUgMjUiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxsaW5lIHgxPSIxMCIgeDI9IjEwIiB5MT0iMTUiIHkyPSI5Ii8+PGxpbmUgeDE9IjE0IiB4Mj0iMTQiIHkxPSIxNSIgeTI9IjkiLz48L3N2Zz4=);animation:pulsate 1s ease infinite}.spl-close{background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIyIDIgMjAgMjAiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bGluZSB4MT0iMTgiIHgyPSI2IiB5MT0iNiIgeTI9IjE4Ii8+PGxpbmUgeDE9IjYiIHgyPSIxOCIgeTE9IjYiIHkyPSIxOCIvPjwvc3ZnPg==)}.spl-next,.spl-prev{top:50%;width:50px;height:50px;opacity:.65;background-color:rgba(0,0,0,.45);border-radius:100%;cursor:pointer;margin-top:-25px;transform:translateX(-100px);background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjI0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cG9seWxpbmUgcG9pbnRzPSIxNSAxOCA5IDEyIDE1IDYiLz48L3N2Zz4=);background-size:30px}.spl-prev{left:20px}.spl-next{left:auto;right:20px;transform:translateX(100px) scaleX(-1)}#spotlight.menu .spl-prev{transform:translateX(0)}#spotlight.menu .spl-next{transform:translateX(0) scaleX(-1)}@media (hover:hover){.spl-page~div{cursor:pointer;transition:opacity .2s ease}.spl-next:hover,.spl-page~div:hover,.spl-prev:hover{opacity:1}}@media (max-width:500px){.spl-header div{width:44px}.spl-footer .spl-title{font-size:20px}.spl-footer{font-size:14px}.spl-next,.spl-prev{width:35px;height:35px;margin-top:-17.5px;background-size:15px 15px}.spl-spinner{background-size:30px 30px}}.hide-scrollbars{overflow:hidden!important}",U=document.getElementsByTagName("head")[0],U.firstChild?U.insertBefore(pe,U.firstChild):U.appendChild(pe),Object.assign||(Object.assign=function(e,t){for(var s,o=Object.keys(t),n=0;n<o.length;n++)s=o[n],e[s]=t[s];return e}),Element.prototype.closest||(Element.prototype.closest=function(e){e=e.substring(1);for(var t=this;t&&1===t.nodeType;){if(t.classList.contains(e))return t;t=t.parentElement}return null});function s(e,t,n){e.classList[n?"add":"remove"](t)}function i(e,t,n){n=""+n,e["_s_"+t]!==n&&(e.style.setProperty(t,n),e["_s_"+t]=n)}je=0;function me(e,t){t&&(i(e,"transition","none"),t()),je||(je=e.clientTop&&0),t&&i(e,"transition","")}function u(e,t,n,s){$(!0,e,t,n,s)}function $(e,t,n,s,o){t[(e?"add":"remove")+"EventListener"](n,s,!o&&!1!==o||o)}function de(e,t){e.stopPropagation(),t&&e.preventDefault()}function z(e,t){i(e,"display",t?"":"none")}function ye(e,t){i(e,"visibility",t?"":"hidden")}function _(e,t){i(e,"transition",t?"":"none")}A="theme download play page close autofit zoom-in zoom-out prev next fullscreen".split(" "),Ye={page:1,close:1,autofit:1,"zoom-in":1,"zoom-out":1,prev:1,next:1,fullscreen:1},o=document.createElement("div"),o.id="spotlight",o.innerHTML="<div class=spl-spinner></div><div class=spl-track><div class=spl-scene><div class=spl-pane></div></div></div><div class=spl-header><div class=spl-page> </div></div><div class=spl-progress></div><div class=spl-footer><div class=spl-title> </div><div class=spl-description> </div><div class=spl-button> </div></div><div class=spl-prev></div><div class=spl-next></div>",ce={},Qe=document.createElement("video");function lt(e,t,n,s){if("node"!==s)for(var o,i,a,c,l=Object.keys(n),r=0;r<l.length;r++)if(o=l[r],3<o.length&&0===o.indexOf("src"))if("video"===s){if(i=ce[o],i){if(0<i){a=n[o];break}}else if(Qe.canPlayType("video/"+o.substring(3).replace("-","").toLowerCase())){ce[o]=1,a=n[o];break}ce[o]=-1}else(i=parseInt(o.substring(4),10))&&(i=Math.abs(t-i),!c||i<c)&&(c=i,a=n[o]);return a||n.src||n.href||e.src||e.href}var e,t,n,o,a,r,c,d,h,m,f,p,g,b,y,w,O,x,C,k,A,M,F,T,N,H,V,U,K,q,Y,G,X,Q,Z,pe,je,Ye,ce,Qe,R={},it=navigator.connection,gt=window.devicePixelRatio||1,He,Ve,ee,ge,$e,oe,se,Be,Re,st,De,ue,Fe,Ae,Ee,te,ne,Ce,xe=document.createElement("img"),Oe,we,_e,be,We,ve,fe,Ke,qe,he,ke,rt;u(document,"click",dt);function ct(){function e(e){return R[e]=(o||document).getElementsByClassName("spl-"+e)[0]}if(!h){h=document.body,V=e("scene"),Oe=e("header"),we=e("footer"),_e=e("title"),be=e("description"),q=e("button"),We=e("prev"),ve=e("next"),Ke=e("page"),N=e("progress"),he=e("spinner"),H=[e("pane")],v("close",ae),h[g="requestFullscreen"]||h[g="msRequestFullscreen"]||h[g="webkitRequestFullscreen"]||h[g="mozRequestFullscreen"]||(g=""),g?(rt=g.replace("request","exit").replace("mozRequest","mozCancel").replace("Request","Exit"),fe=v("fullscreen",Le)):A.pop(),v("autofit",S),v("zoom-in",ze),v("zoom-out",Te),v("theme",ie),qe=v("play",E),v("download",Ue),u(We,"click",le),u(ve,"click",B);var s=e("track");u(s,"mousedown",et),u(s,"mousemove",nt),u(s,"mouseleave",Pe),u(s,"mouseup",Pe),u(s,"touchstart",et,{passive:!1}),u(s,"touchmove",nt,{passive:!0}),u(s,"touchend",Pe),u(q,"click",function(){Z?Z(n,t):Ae&&(location.href=Ae)})}}function v(e,t){var n=document.createElement("div");return n.className="spl-"+e,u(n,"click",t),Oe.appendChild(n),R[e]=n}function dt(e){var t,n=e.target.closest(".spotlight");if(n){de(e,!0),e=n.closest(".spotlight-group"),b=(e||document).getElementsByClassName("spotlight");for(t=0;t<b.length;t++)if(b[t]===n){K=e&&e.dataset,at(t+1);break}}}function at(e){if(m=b.length){h||ct(),Q&&Q(e);for(var a,c=H[0],l=c.parentNode,t=H.length;t<m;t++)a=c.cloneNode(!1),i(a,"left",100*t+"%"),l.appendChild(a),H[t]=a;r||(h.appendChild(o),Se()),n=e||1,_(V),Xe(!0),g&&z(fe,0<screen.availHeight-window.innerHeight),history.pushState({spl:1},""),history.pushState({spl:2},""),_(o,!0),s(h,"hide-scrollbars",!0),s(o,"show",!0),ot(!0),Se(),D(),T&&E(!0,!0)}}function l(e,n){return e=t[e],"undefined"!=typeof e?(e=""+e,"false"!==e&&(e||n)):n}function Ne(t){t?me(e,Ne):(_(V,Ce),i(e,"opacity",ne?0:1),Ge(te&&.8),M&&s(e,M,!0))}function J(o){if(r=H[o-1],e=r.firstChild,n=o,e)C&&S(),De&&s(e,De,!0),Ne(!0),M&&s(e,M),ne&&i(e,"opacity",1),te&&i(e,"transform",""),i(e,"visibility","visible"),F&&(xe.src=F),T&&Ie(d);else{var c=x.media,a=l("spinner",!0);if("video"===c)I(a,!0),e=document.createElement("video"),e.onloadedmetadata=function(){e===this&&(e.onerror=null,e.width=e.videoWidth,e.height=e.videoHeight,L(),I(a),J(o))},e.poster=t.poster,e.preload=Fe?"auto":"metadata",e.controls=l("controls",!0),e.autoplay=t.autoplay,e.h=l("inline"),e.muted=l("muted"),e.src=x.src,r.appendChild(e);else{if("node"===c){e=x.src,"string"==typeof e&&(e=document.querySelector(e)),e&&(e.g||(e.g=e.parentNode),L(),r.appendChild(e),J(o));return}I(a,!0),e=document.createElement("img"),e.onload=function(){e===this&&(e.onerror=null,I(a),J(o),L())},e.src=x.src,r.appendChild(e)}e&&(a||i(e,"visibility","visible"),e.onerror=function(){e===this&&(re(e),s(he,"error",!0),I(a))})}}function I(e,t){e&&s(he,"spin",t)}function tt(){return document.fullscreen||document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement}function ut(){if(Se(),e&&L(),g){var t=tt();s(fe,"on",t),t||z(fe,0<screen.availHeight-window.innerHeight)}}function Se(){w=o.clientWidth,ee=o.clientHeight}function L(){ge=e.clientWidth,$e=e.clientHeight}function Ge(t){i(e,"transform","translate(-50%, -50%) scale("+(t||f)+")")}function j(e,t){i(r,"transform",e||t?"translate("+e+"px, "+t+"px)":"")}function P(e,t,n){t?me(V,function(){P(e,!1,n)}):i(V,"transform","translateX("+(100*-e+(n||0))+"%)")}function ot(e){$(e,window,"keydown",mt),$(e,window,"wheel",ht),$(e,window,"resize",ut),$(e,window,"popstate",ft)}function ft(e){r&&e.state.spl&&ae(!0)}function mt(e){if(r){var n=!1!==t["zoom-in"];switch(e.keyCode){case 8:n&&S();break;case 27:ae();break;case 32:T&&E();break;case 37:le();break;case 39:B();break;case 38:case 107:case 187:n&&ze();break;case 40:case 109:case 189:n&&Te()}}}function ht(e){r&&!1!==t["zoom-in"]&&(e=e.deltaY,0>.5*(0>e?1:e?-1:0)?Te():ze())}function E(e,t){("boolean"==typeof e?e:!d)===!d&&(d=d?clearTimeout(d):1,s(qe,"on",d),t||Ie(d))}function Ie(e){st&&(me(N,function(){i(N,"transition-duration",""),i(N,"transform","")}),e&&(i(N,"transition-duration",Ee+"s"),i(N,"transform","translateX(0)"))),e&&(d=setTimeout(B,1e3*Ee))}function D(){ue&&(ke=Date.now()+2950,p||(s(o,"menu",!0),Ze(3e3)))}function Ze(e){p=setTimeout(function(){var e=Date.now();e>=ke?(s(o,"menu"),p=0):Ze(ke-e)},e)}function Je(e){"boolean"==typeof e&&(p=e?p:0),p?(p=clearTimeout(p),s(o,"menu")):D()}function et(e){de(e,!0),oe=!0,se=!1;var t=e.touches;t&&(t=t[0])&&(e=t),Be=ge*f<=w,He=e.pageX,Ve=e.pageY,_(r)}function Pe(e){if(de(e),oe){if(se){if(Be&&se){var t=(e=a<-(w/7)&&(n<m||y))||a>w/7&&(1<n||y);(e||t)&&(P(n-1,!0,a/w*100),e&&B()||t&&le()),a=0,j()}_(r,!0)}else Je();oe=!1}}function nt(e){if(de(e),oe){var t=e.touches;t&&(t=t[0])&&(e=t),t=(ge*f-w)/2,a-=He-(He=e.pageX),Be||(a>t?a=t:a<-t&&(a=-t),$e*f>ee&&(t=($e*f-ee)/2,c-=Ve-(Ve=e.pageY),c>t?c=t:c<-t&&(c=-t))),se=!0,j(a,c)}else D()}function Le(e){var t=tt();("boolean"!=typeof e||e!==!!t)&&(t?document[rt]():o[g]())}function ie(e){"string"!=typeof e&&(e=O?"":G||"white"),O!==e&&(O&&s(o,O),e&&s(o,e,!0),O=e)}function S(t){"boolean"==typeof t&&(C=!t),C=1===f&&!C,s(e,"autofit",C),i(e,"transform",""),f=1,c=a=0,L(),_(r),j()}function ze(){var e=f/.65;50>=e&&(C&&S(),a/=.65,c/=.65,j(a,c),Me(e))}function Te(){var e=.65*f;C&&S(),1<=e&&(1===e?a=c=0:(a*=.65,c*=.65),j(a,c),Me(e))}function Me(e){f=e||1,Ge()}function Ue(){var s=h,t=document.createElement("a"),n=e.src;t.href=n,t.download=n.substring(n.lastIndexOf("/")+1),s.appendChild(t),t.click(),s.removeChild(t)}function ae(n){setTimeout(function(){h.removeChild(o),r=e=x=t=K=b=Q=X=Y=Z=null},200),s(h,"hide-scrollbars"),s(o,"show"),Le(!1),ot(),history.go(!0===n?-1:-2),F&&(xe.src=""),d&&E(),e&&re(e),p&&(p=clearTimeout(p)),O&&ie(),k&&s(o,k),Y&&Y()}function re(e){if(e.g)e.g.appendChild(e),e.g=null;else{var t=e.parentNode;t&&t.removeChild(e),e.src=e.onerror=""}}function le(e){if(e&&D(),1<m){if(1<n)return W(n-1);if(y)return P(m,!0),W(m)}}function B(e){if(e&&D(),1<m){if(n<m)return W(n+1);if(y)return P(-1,!0),W(1);d&&E()}}function W(e){if(e!==n){d?(clearTimeout(d),Ie()):D();var t=e>n;return n=e,Xe(t),!0}}function pt(e){var a,c,d,r=b[n-1],i=r;if(t={},K&&Object.assign(t,K),Object.assign(t,i.dataset||i),Re=t.media,Z=t.onclick,G=t.theme,k=t.class,ue=l("autohide",!0),y=l("infinite"),st=l("progress",!0),T=l("autoslide"),Fe=l("preload",!0),Ae=t.buttonHref,Ee=T&&parseFloat(T)||7,O||G&&ie(G),k&&s(o,k,!0),k&&me(o),i=t.control){i="string"==typeof i?i.split(","):i;for(a=0;a<A.length;a++)t[A[a]]=!1;for(a=0;a<i.length;a++)c=i[a].trim(),"zoom"===c?t["zoom-in"]=t["zoom-out"]=!0:t[c]=!0}if(i=t.animation,te=ne=Ce=!i,M=!1,i)for(i="string"==typeof i?i.split(","):i,a=0;a<i.length;a++)c=i[a].trim(),"scale"===c?te=!0:"fade"===c?ne=!0:"slide"===c?Ce=!0:c&&(M=c);De=t.fit,a=it&&it.downlink,i=Math.max(ee,w)*gt,a&&1200*a<i&&(i=1200*a),x={media:Re,src:lt(r,i,t,Re),title:l("title",r.alt||r.title||(d=r.firstElementChild)&&(d.alt||d.title))},F&&(xe.src=F=""),Fe&&e&&(r=b[n])&&(e=r.dataset||r,(d=e.media)&&"image"!==d||(F=lt(r,i,e,d)));for(r=0;r<A.length;r++)e=A[r],z(R[e],l(e,Ye[e]))}function Xe(d){c=a=0,f=1,e&&(e.onerror?re(e):(u=e,setTimeout(function(){u&&e!==u&&(re(u),u=null)},650),Ne(),j())),pt(d),P(n-1),s(he,"error"),J(n),_(r),j(),d=x.title;var u,h=l("description"),p=l("button"),g=d||h||p;g&&(d&&(_e.firstChild.nodeValue=d),h&&(be.firstChild.nodeValue=h),p&&(q.firstChild.nodeValue=p),z(_e,d),z(be,h),z(q,p),i(we,"transform","all"===ue?"":"none")),ue||s(o,"menu",!0),ye(we,g),ye(We,y||1<n),ye(ve,y||n<m),Ke.firstChild.nodeValue=1<m?n+" / "+m:"",X&&X(n,t)}window.Spotlight={init:ct,theme:ie,fullscreen:Le,download:Ue,autofit:S,next:B,prev:le,goto:W,close:ae,zoom:Me,menu:Je,show:function(e,t,n){b=e,t&&(K=t,Q=t.onshow,X=t.onchange,Y=t.onclose,n=n||t.index),at(n)},play:E,addControl:v,removeControl:function(e){var t=R[e];t&&(Oe.removeChild(t),R[e]=null)}}}).call(this)