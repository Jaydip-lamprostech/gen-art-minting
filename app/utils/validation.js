// import {
//     CaptureMode,
//     CaptureModeList,
//     CaptureSettings,
//     CaptureTriggerMode,
//     CaptureTriggerModeList,
//   } from "../types/Mint"
  
  /**
   * Checks is the trigger settings of a CaptureSettings object matches what's allowed
   * Return true if that's the case, false otherwise
   */
  export function validateCaptureTriggerSettings(
    settings
  ) {
    // if (!CaptureTriggerModeList.includes(settings.triggerMode))
    //   return false
    if (settings.triggerMode === "DELAY") {
      if (settings.delay == null) return false
      // check if the delay is valid
      if (
        isNaN(settings.delay) ||
        settings.delay < 0 ||
        settings.delay > 300000
      ) {
        return false
      }
    } else if (settings.triggerMode === "FN_TRIGGER") {
      // then it's ok, as trigger should be in the script
      return true
    }
    // everything is OK
    return true
  }
  
  /**
   * Checks if the preview settings of a CaptureSettings object comply to what the
   * platform is allowing
   */
  export function validateCapturePreviewSettings(
    settings
  ){
    // check if capture mode is allowed
    // if (!CaptureModeList.includes(settings.mode)) {
    //   return false
    // }
  
    // if the mode is viewport, check if the settings are matching
    if (settings.mode === "VIEWPORT") {
      if (!settings.resX || !settings.resY) {
        return false
      }
      // check if res X and Y are actual numbers
      if (isNaN(settings.resX) || isNaN(settings.resY)) {
        return false
      }
      // check if resolution is in the accepted limit
      if (
        settings.resX < 256 ||
        settings.resX > 2048 ||
        settings.resY < 256 ||
        settings.resY > 2048
      ) {
        return false
      }
    } else if (settings.mode === "CANVAS") {
      if (!settings.canvasSelector) {
        return false
      }
    }
  
    // every thing is OK
    return true
  }
  
  /**
   * Checks if a CaptureSettings object is correct and complies to what the platform
   * is allowing.
   * Wrapper to call all the sub methods responsible for the validaiton of the whole
   * object, grouped in logical validation parts.
   */
  export function validateCaptureSettings(settings) {
    return (
      validateCapturePreviewSettings(settings) &&
      validateCaptureTriggerSettings(settings)
    )
  }
  