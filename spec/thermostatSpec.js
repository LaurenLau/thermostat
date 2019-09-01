'use strict'

describe ('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
  
  it('has a default value of 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("can increase it's temperature", function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("can increase it's temperature", function() {
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it('has a minimum temperature of 10', function() {
    for (var i = 0; i < 15; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10)
  });

  it('is in power saving mode by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch off power saving mode', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('power saving mode can switched off and back on again', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
});

