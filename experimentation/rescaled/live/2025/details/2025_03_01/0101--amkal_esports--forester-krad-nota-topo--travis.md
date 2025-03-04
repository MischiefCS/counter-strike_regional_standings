### Roster Details<br />
Team Name: AMKAL ESPORTS<br />
Roster: Forester, Krad, nota, topo-, TRAVIS<br />
Global Rank: [101](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  785.4<br />
<br />
Final Rank Value (785.4) = Starting Rank Value (735.8) + Head To Head Adjustments (49.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.356[<sup>1</sup>](#table2)
- Bounty Collected: 0.294[<sup>2</sup>](#table1)
- Opponent Network: 0.055[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.176<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.8
- 400 + ( ( 0.176 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 735.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      782 | 2024-12-21 | Monte                | W   | 0.732      | 0.439        | 0.016 (0.005)    | 0.477 (0.153)    | 0 (0.000) |    14.30 | Forester, Krad, nota, topo-, TRAVIS |
|           10 |      793 | 2024-12-20 | FORZE Reload         | W   | 0.725      | 0.439        | 0.016 (0.005)    | 0.116 (0.037)    | 0 (0.000) |     9.53 | Forester, Krad, nota, topo-, TRAVIS |
|            9 |      807 | 2024-12-19 | BC.Game Esports      | W   | 0.718      | 0.439        | 0.022 (0.007)    | 0.276 (0.087)    | 0 (0.000) |    12.46 | Forester, Krad, nota, topo-, TRAVIS |
|            8 |      869 | 2024-12-14 | ENCE                 | L   | 0.687      | -            | -                | -                | -         |    -3.15 | Forester, Krad, nota, topo-, TRAVIS |
|            7 |      897 | 2024-12-13 | Wild Lotus           | W   | 0.680      | 0.535        | 0.001 (0.000)    | 0.462 (0.168)    | 0 (0.000) |    13.19 | Forester, Krad, nota, topo-, TRAVIS |
|            6 |     1665 | 2024-11-05 | Natus Vincere Junior | L   | 0.424      | -            | -                | -                | -         |    -2.47 | Forester, Krad, nota, topo-, TRAVIS |
|            5 |     2601 | 2024-09-24 | Aurora Gaming        | L   | 0.146      | -            | -                | -                | -         |    -1.57 | Forester, Krad, nota, topo-, TRAVIS |
|            4 |     2654 | 2024-09-23 | Nemiga Gaming        | W   | 0.139      | 0.696        | 0.177 (0.017)    | 0.441 (0.043)    | 0 (0.000) |     3.67 | Forester, Krad, nota, topo-, TRAVIS |
|            3 |     2783 | 2024-09-18 | Wild Lotus           | W   | 0.104      | 0.696        | 0.001 (0.000)    | 0.462 (0.034)    | 0 (0.000) |     1.80 | Forester, Krad, nota, topo-, TRAVIS |
|            2 |     2962 | 2024-09-12 | B8                   | W   | 0.064      | 0.696        | 0.124 (0.006)    | 0.695 (0.031)    | 0 (0.000) |     1.79 | Forester, Krad, nota, topo-, TRAVIS |
|            1 |     3223 | 2024-09-03 | Passion UA           | W   | 0.004      | 0.696        | 0.044 (0.000)    | 0.588 (0.001)    | 0 (0.000) |     0.10 | Forester, Krad, nota, topo-, TRAVIS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,205.23)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.732 | $5,000.00      | $3,660.42       |
| 2024-12-15 |      0.693 | $2,000.00      | $1,385.83       |
| 2024-09-26 |      0.159 | $1,000.00      | $158.98         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
