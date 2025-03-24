### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [69](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [47]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  848.8<br />
<br />
Final Rank Value (848.8) = Starting Rank Value (828.4) + Head To Head Adjustments (20.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.257[<sup>2</sup>](#table1)
- Opponent Network: 0.010[<sup>2</sup>](#table1)
- LAN Wins: 0.242[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 828.4
- 400 + ( ( 0.222 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 828.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     1259 | 2024-11-24 | Team Spirit   | L   | 0.552      | -            | -                | -                | -         |    -0.04 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1269 | 2024-11-23 | 9Pandas       | W   | 0.549      | 0.143        | 0.084 (0.007)    | 0.560 (0.044)    | 1 (0.549) |    12.67 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     1294 | 2024-11-22 | TSM           | W   | 0.544      | 0.143        | 0.009 (0.001)    | 0.167 (0.013)    | 1 (0.544) |     6.42 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     1323 | 2024-11-21 | Team Falcons  | L   | 0.537      | -            | -                | -                | -         |    -0.05 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     1343 | 2024-11-21 | PARIVISION    | W   | 0.531      | 0.143        | 0.006 (0.000)    | 0.077 (0.006)    | 1 (0.531) |     6.01 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     1355 | 2024-11-20 | G2 Esports    | L   | 0.530      | -            | -                | -                | -         |    -0.07 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     1603 | 2024-11-09 | Metizport     | L   | 0.452      | -            | -                | -                | -         |    -3.17 | isak, jocab, MisteM, r1nkle, REZ |
|            8 |     1618 | 2024-11-08 | Alliance      | W   | 0.446      | 0.143        | 0.015 (0.001)    | 0.595 (0.038)    | 1 (0.446) |     8.06 | isak, jocab, MisteM, r1nkle, REZ |
|            7 |     1936 | 2024-10-16 | JANO Esports  | L   | 0.292      | -            | -                | -                | -         |    -4.30 | isak, jocab, MisteM, r1nkle, REZ |
|            6 |     1938 | 2024-10-16 | B8            | L   | 0.292      | -            | -                | -                | -         |    -2.23 | isak, jocab, MisteM, r1nkle, REZ |
|            5 |     2218 | 2024-10-03 | ECSTATIC      | L   | 0.211      | -            | -                | -                | -         |    -3.08 | isak, jocab, MisteM, r1nkle, REZ |
|            4 |     3083 | 2024-09-07 | Team Falcons  | L   | 0.032      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3131 | 2024-09-05 | FaZe Clan     | L   | 0.019      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3169 | 2024-09-04 | Natus Vincere | L   | 0.013      | -            | -                | -                | -         |    -0.00 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3210 | 2024-09-03 | Team Falcons  | W   | 0.005      | 0.889        | 0.927 (0.004)    | 0.745 (0.003)    | 1 (0.005) |     0.16 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,528.74)
- Divide that value by the 5th highest value among all rosters ($336,045.79)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.452 | $11,097.44     | $5,020.56       |
| 2024-10-20 |      0.318 | $5,000.00      | $1,590.39       |
| 2024-09-22 |      0.131 | $7,000.00      | $917.78         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
