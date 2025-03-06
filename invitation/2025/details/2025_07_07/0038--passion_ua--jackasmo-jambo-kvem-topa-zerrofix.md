### Roster Details<br />
Team Name: Passion UA<br />
Roster: jackasmo, jambo, Kvem, Topa, zeRRoFIX<br />
Global Rank: [38](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [27]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  748.7<br />
<br />
Final Rank Value (748.7) = Starting Rank Value (748.0) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.335[<sup>1</sup>](#table2)
- Bounty Collected: 0.223[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.141<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 748.0
- 400 + ( ( 0.141 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 748.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent               | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      140 | 2025-02-21 | GUN5 Esports           | L   | 0.291      | -            | -                | -                | -         |    -4.75 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            6 |      264 | 2025-02-14 | ENCE                   | L   | 0.245      | -            | -                | -                | -         |    -3.80 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            5 |      292 | 2025-02-13 | Betclic Apogee Esports | W   | 0.238      | 0.435        | 0.000 (0.000)    | 0.460 (0.048)    | 0 (0.000) |     1.95 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            4 |      469 | 2025-02-08 | HEROIC                 | L   | 0.203      | -            | -                | -                | -         |    -1.54 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            3 |      503 | 2025-02-07 | BetBoom Team           | W   | 0.196      | 0.143        | 0.060 (0.002)    | 0.299 (0.008)    | 0 (0.000) |     3.92 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            2 |      559 | 2025-02-05 | BetBoom Team           | W   | 0.184      | 0.143        | 0.060 (0.002)    | 0.299 (0.008)    | 0 (0.000) |     3.71 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |
|            1 |      568 | 2025-02-05 | Metizport              | W   | 0.183      | 0.143        | 0.000 (0.000)    | 0.173 (0.005)    | 0 (0.000) |     1.25 | jackasmo, jambo, Kvem, Topa, zeRRoFIX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($503.70)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-15 |      0.252 | $2,000.00      | $503.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
