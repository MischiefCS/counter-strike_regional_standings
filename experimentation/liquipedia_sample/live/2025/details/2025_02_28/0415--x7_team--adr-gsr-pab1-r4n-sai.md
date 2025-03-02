### Roster Details<br />
Team Name: X7 Team<br />
Roster: aDr, gsr, pab1, R4N, sai<br />
Global Rank: [415](../../standings_global_2025_02_28.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_02_28.md)<br />
Regional Rank: [92]( ../../standings_americas_2025_02_28.md)<br />
<br />
Final Rank Value:  600.0<br />
<br />
Final Rank Value (600.0) = Starting Rank Value (640.7) + Head To Head Adjustments (-40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.212[<sup>1</sup>](#table2)
- Bounty Collected: 0.247[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.117<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 640.7
- 400 + ( ( 0.117 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 640.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     1936 | 2024-12-07 | ArtGamerz       | L   | 0.646      | -            | -                | -                | -         |   -13.81 | aDr, gsr, pab1, R4N, sai |
|           18 |     2084 | 2024-12-03 | Guará eSports   | L   | 0.621      | -            | -                | -                | -         |   -13.57 | aDr, gsr, pab1, R4N, sai |
|           17 |     2278 | 2024-11-30 | DB Peek Esports | L   | 0.601      | -            | -                | -                | -         |    -9.26 | aDr, gsr, pab1, R4N, sai |
|           16 |     3701 | 2024-11-05 | Floripa Stars   | L   | 0.433      | -            | -                | -                | -         |    -6.01 | aDr, gsr, pab1, R4N, sai |
|           15 |     3754 | 2024-11-04 | Galorys Academy | W   | 0.427      | 0.250        | 0.001 (0.000)    | 0.171 (0.018)    | 0 (0.000) |     6.65 | aDr, gsr, pab1, R4N, sai |
|           14 |     3896 | 2024-11-02 | FURIA Female    | L   | 0.413      | -            | -                | -                | -         |    -1.35 | aDr, gsr, pab1, R4N, sai |
|           13 |     4013 | 2024-10-31 | 9z Academy      | L   | 0.400      | -            | -                | -                | -         |    -5.74 | aDr, gsr, pab1, R4N, sai |
|           12 |     4391 | 2024-10-24 | Pugdesonesto    | W   | 0.354      | 0.250        | 0.000 (0.000)    | 0.110 (0.010)    | 0 (0.000) |     5.91 | aDr, gsr, pab1, R4N, sai |
|           11 |     4392 | 2024-10-24 | FURIA Female    | W   | 0.353      | 0.250        | 0.076 (0.007)    | 0.292 (0.026)    | 0 (0.000) |    10.18 | aDr, gsr, pab1, R4N, sai |
|           10 |     4701 | 2024-10-17 | Floripa Stars   | L   | 0.307      | -            | -                | -                | -         |    -4.21 | aDr, gsr, pab1, R4N, sai |
|            9 |     5438 | 2024-10-04 | Galorys Academy | L   | 0.220      | -            | -                | -                | -         |    -3.24 | aDr, gsr, pab1, R4N, sai |
|            8 |     5496 | 2024-10-03 | 9z Academy      | L   | 0.213      | -            | -                | -                | -         |    -2.92 | aDr, gsr, pab1, R4N, sai |
|            7 |     5805 | 2024-09-28 | Dusty Roots     | L   | 0.179      | -            | -                | -                | -         |    -1.50 | aDr, gsr, pab1, R4N, sai |
|            6 |     6146 | 2024-09-24 | Pugdesonesto    | L   | 0.153      | -            | -                | -                | -         |    -2.37 | aDr, gsr, pab1, R4N, sai |
|            5 |     6455 | 2024-09-19 | TROPA DOS 7     | L   | 0.121      | -            | -                | -                | -         |    -2.63 | aDr, gsr, pab1, R4N, sai |
|            4 |     6598 | 2024-09-17 | FURIA Female    | W   | 0.107      | 0.250        | 0.076 (0.002)    | 0.292 (0.008)    | 0 (0.000) |     3.06 | aDr, gsr, pab1, R4N, sai |
|            3 |     6908 | 2024-09-12 | Yawara E-Sports | W   | 0.074      | 0.250        | 0.002 (0.000)    | 0.537 (0.010)    | 0 (0.000) |     1.38 | aDr, gsr, pab1, R4N, sai |
|            2 |     7063 | 2024-09-09 | Galorys Academy | L   | 0.053      | -            | -                | -                | -         |    -0.81 | aDr, gsr, pab1, R4N, sai |
|            1 |     7344 | 2024-09-05 | Floripa Stars   | L   | 0.027      | -            | -                | -                | -         |    -0.39 | aDr, gsr, pab1, R4N, sai |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($55.01)
- Divide that value by the 5th highest value among all rosters ($285,971.63)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-06 |      0.440 | $125.00        | $55.01          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
