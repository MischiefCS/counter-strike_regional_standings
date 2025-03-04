### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: Angelka, D7, juliano, kyossa, vicu<br />
Global Rank: [94](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [66]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  806.0<br />
<br />
Final Rank Value (806.0) = Starting Rank Value (787.9) + Head To Head Adjustments (18.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.377[<sup>1</sup>](#table2)
- Bounty Collected: 0.296[<sup>2</sup>](#table1)
- Opponent Network: 0.016[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.204<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 787.9
- 400 + ( ( 0.204 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 787.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           16 |      557 | 2025-02-05 | SAW                        | L   | 1.000      | -            | -                | -                | -         |    -2.81 | Angelka, D7, juliano, kyossa, vicu |
|           15 |      564 | 2025-02-05 | 500                        | L   | 1.000      | -            | -                | -                | -         |    -5.94 | Angelka, D7, juliano, kyossa, vicu |
|           14 |      610 | 2025-02-01 | Prototype Blaze            | W   | 1.000      | 0.447        | 0.058 (0.026)    | 0.173 (0.077)    | 0 (0.000) |    17.32 | D7, juliano, kyossa, vicu, wieenN  |
|           13 |     1260 | 2024-11-24 | FURIA Esports Female       | L   | 0.552      | -            | -                | -                | -         |    -4.25 | Angelka, ASTRA, D7, Hanka, vicu    |
|           12 |     1281 | 2024-11-23 | Fluxo Demons               | W   | 0.546      | 0.604        | 0.016 (0.005)    | 0.100 (0.033)    | 1 (0.546) |     7.33 | Angelka, ASTRA, D7, Hanka, vicu    |
|           11 |     1291 | 2024-11-23 | FlyQuest RED               | W   | 0.544      | 0.604        | 0.007 (0.002)    | 0.052 (0.017)    | 1 (0.544) |     5.14 | Angelka, ASTRA, D7, Hanka, vicu    |
|           10 |     1321 | 2024-11-22 | Imperial Female            | L   | 0.537      | -            | -                | -                | -         |    -4.01 | Angelka, ASTRA, D7, Hanka, vicu    |
|            9 |     1845 | 2024-10-20 | Let Her Cook               | W   | 0.320      | 0.394        | 0.002 (0.000)    | 0.031 (0.004)    | 0 (0.000) |     2.89 | Angelka, ASTRA, D7, Hanka, vicu    |
|            8 |     1861 | 2024-10-19 | K27 Female                 | L   | 0.313      | -            | -                | -                | -         |    -6.60 | Angelka, ASTRA, D7, Hanka, vicu    |
|            7 |     1882 | 2024-10-18 | Team Denmark (Female team) | W   | 0.306      | 0.394        | 0.008 (0.001)    | 0.067 (0.008)    | 0 (0.000) |     3.39 | Angelka, ASTRA, D7, Hanka, vicu    |
|            6 |     2279 | 2024-10-02 | Team Spirit Female         | W   | 0.200      | 0.394        | 0.002 (0.000)    | 0.046 (0.004)    | 0 (0.000) |     1.70 | Angelka, ASTRA, D7, Hanka, vicu    |
|            5 |     2777 | 2024-09-18 | ENCE Athena                | W   | 0.106      | 0.394        | 0.001 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.60 | Angelka, ASTRA, D7, Hanka, vicu    |
|            4 |     2857 | 2024-09-15 | Imperial Female            | W   | 0.085      | 0.547        | 0.134 (0.006)    | 0.210 (0.010)    | 0 (0.000) |     2.04 | Angelka, ASTRA, D7, Hanka, vicu    |
|            3 |     2880 | 2024-09-14 | NIP Impact                 | W   | 0.079      | 0.547        | 0.011 (0.000)    | 0.060 (0.003)    | 0 (0.000) |     0.93 | Angelka, ASTRA, D7, Hanka, vicu    |
|            2 |     2893 | 2024-09-14 | Team Spirit Female         | W   | 0.078      | 0.547        | 0.002 (0.000)    | 0.046 (0.002)    | 0 (0.000) |     0.68 | Angelka, ASTRA, D7, Hanka, vicu    |
|            1 |     3131 | 2024-09-05 | NIP Impact                 | L   | 0.020      | -            | -                | -                | -         |    -0.39 | Angelka, ASTRA, D7, Hanka, vicu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,437.92)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.553 | $13,000.00     | $7,184.31       |
| 2024-09-15 |      0.085 | $3,000.00      | $253.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
