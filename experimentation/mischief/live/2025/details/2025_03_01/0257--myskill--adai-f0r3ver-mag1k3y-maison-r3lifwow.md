### Roster Details<br />
Team Name: MYSKILL<br />
Roster: adai, F0R3VER, mag1k3Y, Maison, R3LiFwOw<br />
Global Rank: [257](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [161]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  617.8<br />
<br />
Final Rank Value (617.8) = Starting Rank Value (620.0) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.251[<sup>1</sup>](#table2)
- Bounty Collected: 0.196[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.113<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 620.0
- 400 + ( ( 0.113 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 620.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |     1249 | 2024-12-21 | Hesta                      | L   | 0.734      | -            | -                | -                | -         |    -8.90 | adai, F0R3VER, mag1k3Y, Maison, R3LiFwOw |
|            9 |     1975 | 2024-12-02 | NEVERMORE (Ukrainian team) | L   | 0.607      | -            | -                | -                | -         |    -6.70 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            8 |     2030 | 2024-12-01 | Team Novaq                 | L   | 0.600      | -            | -                | -                | -         |    -3.11 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            7 |     2036 | 2024-12-01 | PUGSTAR5                   | W   | 0.600      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     3.94 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            6 |     2059 | 2024-12-01 | Team Aldikon               | L   | 0.599      | -            | -                | -                | -         |    -5.26 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            5 |     2125 | 2024-11-30 | The Last Resort            | W   | 0.593      | 0.333        | 0.000 (0.000)    | 0.032 (0.006)    | 0 (0.000) |     5.82 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            4 |     2271 | 2024-11-26 | Donstu Esports             | L   | 0.567      | -            | -                | -                | -         |   -12.66 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            3 |     2560 | 2024-11-17 | DEPO                       | W   | 0.506      | 0.143        | 0.004 (0.000)    | 0.089 (0.006)    | 0 (0.000) |     7.96 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            2 |     2597 | 2024-11-17 | ALLINNERS                  | W   | 0.504      | 0.143        | 0.002 (0.000)    | 0.095 (0.007)    | 0 (0.000) |     8.54 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |
|            1 |     2646 | 2024-11-16 | DEPO                       | W   | 0.498      | 0.143        | 0.004 (0.000)    | 0.089 (0.006)    | 0 (0.000) |     8.09 | adai, F0R3VER, mag1k3Y, Maison, OxygeN   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($354.99)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      0.506 | $702.18        | $354.99         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
