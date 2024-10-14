var PlaybackStatus;
(function (PlaybackStatus) {
    PlaybackStatus["PLAYING"] = "playing";
    PlaybackStatus["PAUSED"] = "paused";
    PlaybackStatus["STOPPED"] = "stopped";
    PlaybackStatus["INTERRUPTED"] = "interrupted";
    PlaybackStatus["SEEKING_FORWARD"] = "seekingForward";
    PlaybackStatus["SEEKING_BACKWARD"] = "seekingBackward";
})(PlaybackStatus || (PlaybackStatus = {}));

export { PlaybackStatus };
//# sourceMappingURL=playback-status.js.map
