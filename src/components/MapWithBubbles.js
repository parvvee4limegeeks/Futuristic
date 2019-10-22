import india50m from 'assets/geo-data/india.json';
import cities from 'assets/geo-data/world-most-populous-cities.json';
import { scaleLinear } from 'd3-scale';
import React, { Component } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Markers,
  ZoomableGroup,
} from 'react-simple-maps';
import { getColor } from 'utils/colors';

const cityScale = scaleLinear()
  .domain([0, 37843000])
  .range([1, 25]);

class BubbleMap extends Component {
  state = {
    cities,
  };

  render() {
    // const primaryColor = getColor('primary');
    const secondaryColor = getColor('secondary');
    const lightColor = getColor('light');

    return (
      <ComposableMap
        projectionConfig={{ scale:1005 }}
        width={551}
        height={551}
        style={{
          width: '100%',
          height: 'auto',
        }}
      >
        <ZoomableGroup center={[79,21]} disablePanning={false}>
          <Geographies geography={india50m}>
            {(geographies, projection) =>
              geographies.map(
                (geography, i) =>
                  geography.id !== 'ATA' && (
                    <Geography
                      key={i}
                      onMouseEnter={(data)=> console.log(data.properties.NAME_1)
                      }
                      geography={geography}
                      projection={projection}
                      style={{
                        default: {
                          fill: lightColor,
                          stroke: lightColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        hover: {
                          fill: secondaryColor,
                          stroke: secondaryColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                        pressed: {
                          fill: secondaryColor,
                          stroke: secondaryColor,
                          strokeWidth: 0.75,
                          outline: 'none',
                        },
                      }}
                    />
                  ),
              )
            }
          </Geographies>
          <Markers>
            {this.state.cities.map((city, i) => (
              <Marker onClick={()=> console.log(city.population)
              } key={i} marker={city}>
                <circle
                  cx={0}
                  cy={0}
                  r={cityScale(city.population)}
                  fill={secondaryColor}
                  stroke={secondaryColor}
                  strokeWidth="1"
                />
              </Marker>
            ))}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    );
  }
}

export default BubbleMap;
