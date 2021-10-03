# Back-End Of Sunergy

This is the back-end of the Sunergy application, a project developed by the Sun Wars team of Nasa Space Apps Challenge Recife as part of the solution for the 'You are my sunshine' challenge.

## API Routes

#### https://sunergy.mybluemix.net/api/getDataWithAdress
Use the **POST** method with the parameters in this example:
  
```
{
  street: 'Rua Uriel  de Holanda',
  number: 576,
  district: 'Linha do Tiro',
  city: 'Recife',
  consumedWattsPerMonth: 230000, // Equal to 230kWh
}
```

#### https://sunergy.mybluemix.net/api/getDataWithCoordinates
Use the **POST** method with the parameters in this example:

```
{
  longitude: -34.911972,
  latitude: -8.007771,
  consumedWattsPerMonth: 300000, // Equal to 300kWh
}
```

## Response of API
The response is the same for both routes. Response example:

```
{
  medianOfIrradiationInRegion: 6.06,
  panelsInfos: {
    panelModel_1: Solar_Panel {
      panelPower: 310,
      wattsPerHour: 248,
      wattsPerDay: 1502,
      wattsPerMonth: 45060,
      wattsPerYear: 540720,
      numberOfPanelsNeeded: 7
    },
    panelModel_2: Solar_Panel {
      panelPower: 340,
      wattsPerHour: 272,
      wattsPerDay: 1648,
      wattsPerMonth: 49440,
      wattsPerYear: 593280,
      numberOfPanelsNeeded: 7
    },
    panelModel_3: Solar_Panel {
      panelPower: 400,
      wattsPerHour: 320,
      wattsPerDay: 1939,
      wattsPerMonth: 58170,
      wattsPerYear: 698040,
      numberOfPanelsNeeded: 6
    }
  },
  valueToSaveInReal: 240
}
```

### OBS
The 'valueToSaveInReal' is calculated using the average price of kWh in Brazil, about R$ 0.80.