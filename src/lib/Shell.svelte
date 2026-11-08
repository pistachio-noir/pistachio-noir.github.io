<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
</script>

<section class="panel" id="shell" aria-labelledby="shell-h">
  <AppHead icon="icon-shell.svg" id="shell-h" title="Pistachio Shell">
    A desktop shell for Hyprland, written in QML on Quickshell. One calm set of panels replaces the bar, launcher, notification daemon, lock screen and admin password prompt.
  </AppHead>

  <Shot
    class="showoff"
    src="shell-showoff.webp" w={1920} h={780}
    alt="The Pistachio shell on a dark green wallpaper. Weather, a calendar and an empty notification centre sit on the left, a terminal running fastfetch in the middle, quick settings on the right, and the floating bar along the bottom."
    caption="Showoff mode, the shell's own setup for screenshots. It opens the calendar, weather, quick settings and a terminal, and leaves out anything that names the machine."
  />

  <div class="feats">
    <Feat title="A bar that gets out of the way">A floating pill with workspaces, the focused window, the clock and a status chip. It hides while a window overlaps it. Point at the bottom edge to bring it back.</Feat>
    <Feat title="A launcher that does sums">Fuzzy search over apps, windows, workspaces and Bluetooth devices. Type <code>12*(3+4)</code> for an answer, <code>:fire</code> for emoji, <code>$btop</code> to run a command, <code>/</code> to find files, <code>kill firefox</code> to end a program and <code>tldr tar</code> for examples. Your recent CLion projects and Steam games turn up as you type their names.</Feat>
    <Feat title="Notifications with a calendar">The shell is the notification daemon. Toasts appear above the bar, history survives restarts, and a month calendar and the weather sit beside the centre.</Feat>
    <Feat title="Quick settings">Tiles for Ethernet, Bluetooth, Do not disturb and Night light. Sliders for volume, microphone and brightness. What is playing, with its controls.</Feat>
    <Feat title="A lock screen that tells little">It checks your password through PAM over a blurred still of the desktop. It shows how many notifications you missed, never what they say.</Feat>
    <Feat title="Screenshots that copy text">Drag out a region, a window or the screen. Or drag over some words and the shell reads them and copies them.</Feat>
    <Feat title="Record the screen, pick a colour">The same menu records an area or the whole screen, with the sound that is playing, and shows a red dot and the time on the bar until you stop. Colour copies the hex of any pixel you click.</Feat>
    <Feat title="A mixer for every app">A volume slider for each app that is playing sound, those on your workspace first. Click an app's icon to mute it.</Feat>
    <Feat title="Tabbed workspaces">Right-click a workspace and its windows gather into one group under Hyprland's own tab bar, drawn as pistachio pills with the shown tab in green. Click a tab to show it, middle-click to close it. Your Hyprland config stays untouched.</Feat>
  </div>

  <div class="login">
    <Shot
      src="shell-login.webp" w={1600} h={900}
      alt="A login screen on a near-black background with a large 23:27 clock, the date, a round user avatar and a pill-shaped password field."
    />
    <div>
      <h3>The login screen matches</h3>
      <p>A matching SDDM theme ships with the shell: a big clock, your name and one password field.</p>
    </div>
  </div>

  <p class="fact">Built for a single-monitor desktop. Tested on Arch Linux with Hyprland 0.56 and Quickshell 0.3.2.</p>
</section>

<style>
  .panel :global(.showoff) { margin-top: 56px; }
  .feats { margin-top: 64px; }
  .login { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 6fr); gap: clamp(24px, 5vw, 80px); align-items: center; margin-top: 72px; }
  .login p { color: var(--subtext); margin-top: 8px; max-width: 30rem; }
  .fact { margin-top: 56px; font-size: 14px; color: var(--subtext); }

  @media (max-width: 900px) {
    .login { grid-template-columns: minmax(0, 1fr); }
  }
  /* On a phone the wide capture would be unreadable, so show its right half: the terminal and quick settings. */
  @media (max-width: 700px) {
    .panel :global(.showoff img) { aspect-ratio: 4 / 3; object-fit: cover; object-position: 64% 50%; }
  }
</style>
