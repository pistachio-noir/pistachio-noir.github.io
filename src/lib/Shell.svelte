<script>
  import AppHead from './AppHead.svelte';
  import Feat from './Feat.svelte';
  import Shot from './Shot.svelte';
</script>

<section class="panel" id="shell" aria-labelledby="shell-h">
  <AppHead icon="icon-shell.svg" id="shell-h" title="Pistachio Shell">
    A desktop shell for Hyprland, written in QML on Quickshell. Bar, launcher, notification daemon, lock screen, admin password prompt: it replaces the lot. Yes, really.
  </AppHead>

  <Shot
    class="showoff"
    src="shell-showoff.webp" w={1920} h={780}
    alt="The Pistachio shell on a dark green wallpaper. Weather, a calendar and an empty notification centre sit on the left, a terminal running fastfetch in the middle, quick settings on the right, and the floating bar along the bottom."
    caption="Showoff mode: the shell sets up its own screenshot so you can brag. It hides anything that names the machine, don't worry."
  />

  <div class="feats">
    <Feat title="A bar that gets out of the way">A floating pill with workspaces, the focused window, a clock and a status chip. It gets out of your way when a window comes near. Poke the bottom edge and it's back.</Feat>
    <Feat title="A launcher that does sums">Fuzzy search for apps, windows, workspaces and Bluetooth devices. Then it gets silly: <code>12*(3+4)</code> does the maths, <code>:fire</code> finds emoji, <code>$btop</code> runs a command, <code>/</code> finds files, <code>kill firefox</code> ends a program and <code>tldr tar</code> shows examples so you don't have to google them. CLion projects and Steam games show up if you type their names.</Feat>
    <Feat title="Notifications with a calendar">The shell is the notification daemon, so toasts pop up above the bar and the history survives restarts. There's a calendar and the weather right next to it, because why not.</Feat>
    <Feat title="Quick settings">Tiles for Ethernet, Bluetooth, Do not disturb and Night light. Sliders for volume, mic and brightness. Plus whatever's playing, with skip buttons.</Feat>
    <Feat title="A lock screen that tells little">Checks your password through PAM over a blurred still of your desktop. It tells you how many notifications you missed, but never what they said. Nosy people get nothing.</Feat>
    <Feat title="Screenshots that copy text">Grab a region, a window or the whole screen. Or drag over some words and the shell reads them and copies the text. Great for error messages you can't be bothered to retype.</Feat>
    <Feat title="Record the screen, pick a colour">Same menu records an area or the whole screen, sound included. A red dot and a timer sit on the bar until you stop it. Colour copies the hex of whatever pixel you click.</Feat>
    <Feat title="A mixer for every app">A volume slider for every app that's making noise, the ones on your workspace first. Click an app's icon to shut it up.</Feat>
    <Feat title="Tabbed workspaces">Right-click a workspace and its windows pile into one group under Hyprland's own tab bar, drawn as pill tabs with the current one in green. Click a tab to show it, middle-click to close it. It never touches your Hyprland config.</Feat>
  </div>

  <div class="login">
    <Shot
      src="shell-login.webp" w={1600} h={900}
      alt="A login screen on a near-black background with a large 23:27 clock, the date, a round user avatar and a pill-shaped password field."
    />
    <div>
      <h3>The login screen matches</h3>
      <p>There's a matching SDDM theme too. Big clock, your name, one password field. That's it.</p>
    </div>
  </div>

  <p class="fact">Built for one monitor, tested on Arch with Hyprland 0.56 and Quickshell 0.3.2. Anywhere else, good luck.</p>
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
