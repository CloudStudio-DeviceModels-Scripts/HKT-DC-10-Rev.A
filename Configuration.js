function getConfiguration(config) {
    // This function allows you to indicate general configuration values
    // for all devices of this model.

    // Depending on the meaning of the "device address" in this device, 
    // you may want to change the label that is used to refer to the 
    // address in the user interface.
    // For instance, if the address of the device is actually a MAC 
    // address, you may want to use the code below.

    config.addressLabel = { en: "DevEUI", es: "DevEUI" };
}

function getEndpoints(deviceAddress, endpoints) {
    endpoints.addEndpoint("1", "Parking status", endpointType.iasSensor, iasEndpointSubType.parkingSensor);
    var x = endpoints.addEndpoint("2", "X axis", endpointType.genericSensor);
    x.variableTypeId = 1286;
    var y = endpoints.addEndpoint("3", "Y axis", endpointType.genericSensor);
    y.variableTypeId = 1286;
    var z = endpoints.addEndpoint("4", "Z axis", endpointType.genericSensor);
    z.variableTypeId = 1286;
    endpoints.addEndpoint("5", "Temperature", endpointType.temperatureSensor);
    endpoints.addEndpoint("6", "Battery", endpointType.voltageSensor);
    endpoints.addEndpoint("7", "Alarm", endpointType.iasSensor, iasEndpointSubType.alarmInput);


}

function validateDeviceAddress(address, result) {
    // This function allows you to validate the address of a device, when
    // the user is creating it. If your device has special validation rules
    // for the address, you can check them here, and return an error message
    // in case the address format is incorrect.

    // In the code below, a validation is made to ensure that the address 
    // is exactly 10 characters long.

    // if (address.length != 10) {
    //   result.ok = false;
    //   result.errorMessage = {
    //     en: "The address must be 10 characters long", 
    //     es: "La dirección debe tener exactamente 10 caracteres"
    //   };
    // }
}

function updateDeviceUIRules(device, rules) {
    // This function allows you to specify UI rules at the device level.
    // For instance, you can make it possible to enable or disable adding
    // endpoints manually to the device after it was created.

    // In the code below, adding endpoints manually is disabled in the
    // user interface. This means that the device will be limited to the 
    // endpoints defined by function getEndpoints() above.

    // rules.canCreateEndpoints = false;
}

