window.SIDEBAR_ITEMS = {"constant":["ALLOW_DEVICE_EVENTS_REQUEST","BARRIER_HIT_EVENT","BARRIER_LEAVE_EVENT","BUTTON_PRESS_EVENT","BUTTON_RELEASE_EVENT","CHANGE_DEVICE_CONTROL_REQUEST","CHANGE_DEVICE_DONT_PROPAGATE_LIST_REQUEST","CHANGE_DEVICE_KEY_MAPPING_REQUEST","CHANGE_DEVICE_NOTIFY_EVENT","CHANGE_DEVICE_PROPERTY_REQUEST","CHANGE_FEEDBACK_CONTROL_REQUEST","CHANGE_KEYBOARD_DEVICE_REQUEST","CHANGE_POINTER_DEVICE_REQUEST","CLASS_ERROR","CLOSE_DEVICE_REQUEST","DELETE_DEVICE_PROPERTY_REQUEST","DEVICE_BELL_REQUEST","DEVICE_BUSY_ERROR","DEVICE_BUTTON_PRESS_EVENT","DEVICE_BUTTON_RELEASE_EVENT","DEVICE_BUTTON_STATE_NOTIFY_EVENT","DEVICE_CHANGED_EVENT","DEVICE_ERROR","DEVICE_FOCUS_IN_EVENT","DEVICE_FOCUS_OUT_EVENT","DEVICE_KEY_PRESS_EVENT","DEVICE_KEY_RELEASE_EVENT","DEVICE_KEY_STATE_NOTIFY_EVENT","DEVICE_MAPPING_NOTIFY_EVENT","DEVICE_MOTION_NOTIFY_EVENT","DEVICE_PRESENCE_NOTIFY_EVENT","DEVICE_PROPERTY_NOTIFY_EVENT","DEVICE_STATE_NOTIFY_EVENT","DEVICE_VALUATOR_EVENT","ENTER_EVENT","EVENT_ERROR","FOCUS_IN_EVENT","FOCUS_OUT_EVENT","GESTURE_PINCH_BEGIN_EVENT","GESTURE_PINCH_END_EVENT","GESTURE_PINCH_UPDATE_EVENT","GESTURE_SWIPE_BEGIN_EVENT","GESTURE_SWIPE_END_EVENT","GESTURE_SWIPE_UPDATE_EVENT","GET_DEVICE_BUTTON_MAPPING_REQUEST","GET_DEVICE_CONTROL_REQUEST","GET_DEVICE_DONT_PROPAGATE_LIST_REQUEST","GET_DEVICE_FOCUS_REQUEST","GET_DEVICE_KEY_MAPPING_REQUEST","GET_DEVICE_MODIFIER_MAPPING_REQUEST","GET_DEVICE_MOTION_EVENTS_REQUEST","GET_DEVICE_PROPERTY_REQUEST","GET_EXTENSION_VERSION_REQUEST","GET_FEEDBACK_CONTROL_REQUEST","GET_SELECTED_EXTENSION_EVENTS_REQUEST","GRAB_DEVICE_BUTTON_REQUEST","GRAB_DEVICE_KEY_REQUEST","GRAB_DEVICE_REQUEST","HIERARCHY_EVENT","KEY_PRESS_EVENT","KEY_RELEASE_EVENT","LEAVE_EVENT","LIST_DEVICE_PROPERTIES_REQUEST","LIST_INPUT_DEVICES_REQUEST","MODE_ERROR","MOTION_EVENT","OPEN_DEVICE_REQUEST","PROPERTY_EVENT","PROXIMITY_IN_EVENT","PROXIMITY_OUT_EVENT","QUERY_DEVICE_STATE_REQUEST","RAW_BUTTON_PRESS_EVENT","RAW_BUTTON_RELEASE_EVENT","RAW_KEY_PRESS_EVENT","RAW_KEY_RELEASE_EVENT","RAW_MOTION_EVENT","RAW_TOUCH_BEGIN_EVENT","RAW_TOUCH_END_EVENT","RAW_TOUCH_UPDATE_EVENT","SELECT_EXTENSION_EVENT_REQUEST","SEND_EXTENSION_EVENT_REQUEST","SET_DEVICE_BUTTON_MAPPING_REQUEST","SET_DEVICE_FOCUS_REQUEST","SET_DEVICE_MODE_REQUEST","SET_DEVICE_MODIFIER_MAPPING_REQUEST","SET_DEVICE_VALUATORS_REQUEST","TOUCH_BEGIN_EVENT","TOUCH_END_EVENT","TOUCH_OWNERSHIP_EVENT","TOUCH_UPDATE_EVENT","UNGRAB_DEVICE_BUTTON_REQUEST","UNGRAB_DEVICE_KEY_REQUEST","UNGRAB_DEVICE_REQUEST","X11_EXTENSION_NAME","X11_XML_VERSION","XI_ALLOW_EVENTS_REQUEST","XI_BARRIER_RELEASE_POINTER_REQUEST","XI_CHANGE_CURSOR_REQUEST","XI_CHANGE_HIERARCHY_REQUEST","XI_CHANGE_PROPERTY_REQUEST","XI_DELETE_PROPERTY_REQUEST","XI_GET_CLIENT_POINTER_REQUEST","XI_GET_FOCUS_REQUEST","XI_GET_PROPERTY_REQUEST","XI_GET_SELECTED_EVENTS_REQUEST","XI_GRAB_DEVICE_REQUEST","XI_LIST_PROPERTIES_REQUEST","XI_PASSIVE_GRAB_DEVICE_REQUEST","XI_PASSIVE_UNGRAB_DEVICE_REQUEST","XI_QUERY_DEVICE_REQUEST","XI_QUERY_POINTER_REQUEST","XI_QUERY_VERSION_REQUEST","XI_SELECT_EVENTS_REQUEST","XI_SET_CLIENT_POINTER_REQUEST","XI_SET_FOCUS_REQUEST","XI_UNGRAB_DEVICE_REQUEST","XI_WARP_POINTER_REQUEST"],"enum":["ChangeDevicePropertyAux","DeviceClassData","DeviceCtlData","DeviceStateData","FeedbackCtlData","FeedbackStateData","GetDevicePropertyItems","HierarchyChangeData","InputInfoInfo","InputStateData","XIChangePropertyAux","XIGetPropertyItems"],"fn":["allow_device_events","change_device_control","change_device_dont_propagate_list","change_device_key_mapping","change_device_property","change_feedback_control","change_keyboard_device","change_pointer_device","close_device","delete_device_property","device_bell","get_device_button_mapping","get_device_control","get_device_dont_propagate_list","get_device_focus","get_device_key_mapping","get_device_modifier_mapping","get_device_motion_events","get_device_property","get_extension_version","get_feedback_control","get_selected_extension_events","grab_device","grab_device_button","grab_device_key","list_device_properties","list_input_devices","open_device","query_device_state","select_extension_event","send_extension_event","set_device_button_mapping","set_device_focus","set_device_mode","set_device_modifier_mapping","set_device_valuators","ungrab_device","ungrab_device_button","ungrab_device_key","xi_allow_events","xi_barrier_release_pointer","xi_change_cursor","xi_change_hierarchy","xi_change_property","xi_delete_property","xi_get_client_pointer","xi_get_focus","xi_get_property","xi_get_selected_events","xi_grab_device","xi_list_properties","xi_passive_grab_device","xi_passive_ungrab_device","xi_query_device","xi_query_pointer","xi_query_version","xi_select_events","xi_set_client_pointer","xi_set_focus","xi_ungrab_device","xi_warp_pointer"],"struct":["AddMaster","AllowDeviceEventsRequest","AttachSlave","AxisInfo","BarrierFlags","BarrierHitEvent","BarrierReleasePointerInfo","BellFeedbackCtl","BellFeedbackState","ButtonClass","ButtonInfo","ButtonPressEvent","ButtonState","ChangeDevice","ChangeDeviceControlReply","ChangeDeviceControlRequest","ChangeDeviceDontPropagateListRequest","ChangeDeviceKeyMappingRequest","ChangeDeviceNotifyEvent","ChangeDevicePropertyRequest","ChangeFeedbackControlMask","ChangeFeedbackControlRequest","ChangeKeyboardDeviceReply","ChangeKeyboardDeviceRequest","ChangeMode","ChangePointerDeviceReply","ChangePointerDeviceRequest","ChangeReason","ClassesReportedMask","CloseDeviceRequest","DeleteDevicePropertyRequest","DetachSlave","Device","DeviceAbsAreaCtrl","DeviceAbsAreaState","DeviceAbsCalibCtl","DeviceAbsCalibState","DeviceBellRequest","DeviceButtonStateNotifyEvent","DeviceChange","DeviceChangedEvent","DeviceClass","DeviceClassDataButton","DeviceClassDataGesture","DeviceClassDataKey","DeviceClassDataScroll","DeviceClassDataTouch","DeviceClassDataValuator","DeviceClassType","DeviceControl","DeviceCoreCtrl","DeviceCoreState","DeviceCtl","DeviceCtlDataAbsArea","DeviceCtlDataAbsCalib","DeviceCtlDataCore","DeviceCtlDataResolution","DeviceEnableCtrl","DeviceEnableState","DeviceFocusInEvent","DeviceInfo","DeviceInputMode","DeviceKeyPressEvent","DeviceKeyStateNotifyEvent","DeviceMappingNotifyEvent","DeviceName","DevicePresenceNotifyEvent","DevicePropertyNotifyEvent","DeviceResolutionCtl","DeviceResolutionState","DeviceState","DeviceStateDataAbsArea","DeviceStateDataAbsCalib","DeviceStateDataCore","DeviceStateDataResolution","DeviceStateNotifyEvent","DeviceTimeCoord","DeviceType","DeviceUse","DeviceValuatorEvent","EnterEvent","EventForSend","EventMask","EventMode","FeedbackClass","FeedbackCtl","FeedbackCtlDataBell","FeedbackCtlDataInteger","FeedbackCtlDataKeyboard","FeedbackCtlDataLed","FeedbackCtlDataPointer","FeedbackCtlDataString","FeedbackState","FeedbackStateDataBell","FeedbackStateDataInteger","FeedbackStateDataKeyboard","FeedbackStateDataLed","FeedbackStateDataPointer","FeedbackStateDataString","Fp3232","GestureClass","GesturePinchBeginEvent","GesturePinchEventFlags","GestureSwipeBeginEvent","GestureSwipeEventFlags","GetDeviceButtonMappingReply","GetDeviceButtonMappingRequest","GetDeviceControlReply","GetDeviceControlRequest","GetDeviceDontPropagateListReply","GetDeviceDontPropagateListRequest","GetDeviceFocusReply","GetDeviceFocusRequest","GetDeviceKeyMappingReply","GetDeviceKeyMappingRequest","GetDeviceModifierMappingReply","GetDeviceModifierMappingRequest","GetDeviceMotionEventsReply","GetDeviceMotionEventsRequest","GetDevicePropertyReply","GetDevicePropertyRequest","GetExtensionVersionReply","GetExtensionVersionRequest","GetFeedbackControlReply","GetFeedbackControlRequest","GetSelectedExtensionEventsReply","GetSelectedExtensionEventsRequest","GrabDeviceButtonRequest","GrabDeviceKeyRequest","GrabDeviceReply","GrabDeviceRequest","GrabMode22","GrabModifierInfo","GrabOwner","GrabType","GroupInfo","HierarchyChange","HierarchyChangeDataAddMaster","HierarchyChangeDataAttachSlave","HierarchyChangeDataDetachSlave","HierarchyChangeDataRemoveMaster","HierarchyChangeType","HierarchyEvent","HierarchyInfo","HierarchyMask","InputClass","InputClassInfo","InputInfo","InputInfoInfoButton","InputInfoInfoKey","InputInfoInfoValuator","InputState","InputStateDataButton","InputStateDataKey","InputStateDataValuator","IntegerFeedbackCtl","IntegerFeedbackState","KbdFeedbackCtl","KbdFeedbackState","KeyClass","KeyEventFlags","KeyInfo","KeyPressEvent","KeyState","LedFeedbackCtl","LedFeedbackState","ListDevicePropertiesReply","ListDevicePropertiesRequest","ListInputDevicesReply","ListInputDevicesRequest","ModifierDevice","ModifierInfo","ModifierMask","MoreEventsMask","NotifyDetail","NotifyMode","OpenDeviceReply","OpenDeviceRequest","PointerEventFlags","PropagateMode","PropertyEvent","PropertyFlag","PropertyFormat","PtrFeedbackCtl","PtrFeedbackState","QueryDeviceStateReply","QueryDeviceStateRequest","RawButtonPressEvent","RawKeyPressEvent","RawTouchBeginEvent","RemoveMaster","ScrollClass","ScrollFlags","ScrollType","SelectExtensionEventRequest","SendExtensionEventRequest","SetDeviceButtonMappingReply","SetDeviceButtonMappingRequest","SetDeviceFocusRequest","SetDeviceModeReply","SetDeviceModeRequest","SetDeviceModifierMappingReply","SetDeviceModifierMappingRequest","SetDeviceValuatorsReply","SetDeviceValuatorsRequest","StringFeedbackCtl","StringFeedbackState","TouchBeginEvent","TouchClass","TouchEventFlags","TouchMode","TouchOwnershipEvent","TouchOwnershipFlags","UngrabDeviceButtonRequest","UngrabDeviceKeyRequest","UngrabDeviceRequest","ValuatorClass","ValuatorInfo","ValuatorMode","ValuatorState","ValuatorStateModeMask","XIAllowEventsRequest","XIBarrierReleasePointerRequest","XIChangeCursorRequest","XIChangeHierarchyRequest","XIChangePropertyRequest","XIDeletePropertyRequest","XIDeviceInfo","XIEventMask","XIGetClientPointerReply","XIGetClientPointerRequest","XIGetFocusReply","XIGetFocusRequest","XIGetPropertyReply","XIGetPropertyRequest","XIGetSelectedEventsReply","XIGetSelectedEventsRequest","XIGrabDeviceReply","XIGrabDeviceRequest","XIListPropertiesReply","XIListPropertiesRequest","XIPassiveGrabDeviceReply","XIPassiveGrabDeviceRequest","XIPassiveUngrabDeviceRequest","XIQueryDeviceReply","XIQueryDeviceRequest","XIQueryPointerReply","XIQueryPointerRequest","XIQueryVersionReply","XIQueryVersionRequest","XISelectEventsRequest","XISetClientPointerRequest","XISetFocusRequest","XIUngrabDeviceRequest","XIWarpPointerRequest"],"trait":["ConnectionExt"],"type":["BarrierLeaveEvent","ButtonReleaseEvent","DeviceButtonPressEvent","DeviceButtonReleaseEvent","DeviceFocusOutEvent","DeviceId","DeviceKeyReleaseEvent","DeviceMotionNotifyEvent","EventClass","EventTypeBase","FocusInEvent","FocusOutEvent","Fp1616","GesturePinchEndEvent","GesturePinchUpdateEvent","GestureSwipeEndEvent","GestureSwipeUpdateEvent","KeyCode","KeyReleaseEvent","LeaveEvent","MotionEvent","ProximityInEvent","ProximityOutEvent","RawButtonReleaseEvent","RawKeyReleaseEvent","RawMotionEvent","RawTouchEndEvent","RawTouchUpdateEvent","TouchEndEvent","TouchUpdateEvent"]};