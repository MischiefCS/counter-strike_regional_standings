### Roster Details<br />
Team Name: Impulse GW<br />
Roster: h0t, M1KA, Mané, PUIG, Sprayy<br />
Global Rank: [199](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [144]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  708.9<br />
<br />
Final Rank Value (708.9) = Starting Rank Value (727.8) + Head To Head Adjustments (-18.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.205[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.139[<sup>2</sup>](#table1)

The average of these factors is 0.166<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 727.8
- 400 + ( ( 0.166 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 727.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |      916 | 2024-12-28 | CHAOX ESPORTS           | W   | 0.779      | 0.291        | 0.002 (0.001)    | 0.000 (0.000)    | 1 (0.779) |     6.80 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           18 |     1061 | 2024-12-21 | The Agency Clan         | L   | 0.733      | -            | -                | -                | -         |    -7.20 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           17 |     1912 | 2024-12-02 | ZOTIX                   | L   | 0.607      | -            | -                | -                | -         |   -12.17 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           16 |     2201 | 2024-11-28 | Ex-ESC Gaming           | L   | 0.580      | -            | -                | -                | -         |   -10.72 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           15 |     2515 | 2024-11-22 | KUUSAMO.gg              | W   | 0.540      | 0.284        | 0.000 (0.000)    | 0.180 (0.028)    | 0 (0.000) |     3.94 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           14 |     2521 | 2024-11-22 | PCIFIC Espor            | W   | 0.540      | 0.284        | 0.004 (0.001)    | 0.279 (0.043)    | 0 (0.000) |     8.99 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           13 |     3576 | 2024-11-03 | The Agency Clan         | L   | 0.413      | -            | -                | -                | -         |    -4.26 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           12 |     3611 | 2024-11-03 | Rhyno Youngsters        | W   | 0.411      | 0.264        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.411) |     1.83 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           11 |     3878 | 2024-10-29 | GOOFYBOYZ               | L   | 0.380      | -            | -                | -                | -         |    -5.56 | h0t, M1KA, Mané, PUIG, Sprayy     |
|           10 |     3926 | 2024-10-28 | The Agency Clan         | L   | 0.374      | -            | -                | -                | -         |    -4.05 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            9 |     4206 | 2024-10-22 | RogerBall               | W   | 0.334      | 0.143        | 0.000 (0.000)    | 0.034 (0.002)    | 0 (0.000) |     2.27 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            8 |     4220 | 2024-10-22 | GOOFYBOYZ               | W   | 0.333      | 0.143        | 0.003 (0.000)    | 0.182 (0.009)    | 0 (0.000) |     5.57 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            7 |     4348 | 2024-10-19 | SSKT                    | W   | 0.313      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.39 | h0t, M1KA, Mané, PUIG, Sprayy     |
|            6 |     4721 | 2024-10-12 | Rhyno Youngsters        | L   | 0.265      | -            | -                | -                | -         |    -3.82 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            5 |     4751 | 2024-10-11 | 100K                    | W   | 0.260      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.14 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            4 |     5530 | 2024-09-28 | Rhyno Esports           | L   | 0.171      | -            | -                | -                | -         |    -1.94 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            3 |     5581 | 2024-09-27 | Turritos                | W   | 0.166      | 0.143        | 0.000 (0.000)    | 0.007 (0.000)    | 0 (0.000) |     0.73 | h0t, Horsalo, M1KA, PUIG, Sprayy  |
|            2 |     6759 | 2024-09-08 | SQUAD (Portuguese team) | L   | 0.040      | -            | -                | -                | -         |    -1.00 | h0t, M1KA, PUIG, SeabraEZ, Sprayy |
|            1 |     6833 | 2024-09-07 | EXSAD Gaming            | L   | 0.033      | -            | -                | -                | -         |    -0.83 | h0t, M1KA, PUIG, SeabraEZ, Sprayy |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,161.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-28 |      0.779 | $2,607.14      | $2,032.24       |
| 2024-12-22 |      0.741 | $52.15         | $38.62          |
| 2024-11-03 |      0.414 | $217.62        | $90.13          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
