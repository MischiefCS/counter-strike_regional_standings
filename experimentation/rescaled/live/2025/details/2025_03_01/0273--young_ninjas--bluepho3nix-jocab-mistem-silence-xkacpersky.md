### Roster Details<br />
Team Name: Young Ninjas<br />
Roster: BluePho3nix, jocab, MisteM, Silence, xKacpersky<br />
Global Rank: [273](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [149]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  480.9<br />
<br />
Final Rank Value (480.9) = Starting Rank Value (480.4) + Head To Head Adjustments (0.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.042<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 480.4
- 400 + ( ( 0.042 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 480.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     3057 | 2024-09-08 | CYBERSHOKE Esports  | L   | 0.037      | -            | -                | -                | -         |    -0.06 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|            5 |     3090 | 2024-09-07 | GUN5 Esports        | L   | 0.031      | -            | -                | -                | -         |    -0.04 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|            4 |     3116 | 2024-09-06 | Zero Tenacity       | L   | 0.024      | -            | -                | -                | -         |    -0.07 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|            3 |     3177 | 2024-09-04 | Alliance            | W   | 0.012      | 0.435        | 0.015 (0.000)    | 0.595 (0.003)    | 0 (0.000) |     0.36 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|            2 |     3185 | 2024-09-04 | TSM                 | W   | 0.011      | 0.384        | 0.009 (0.000)    | 0.167 (0.001)    | 0 (0.000) |     0.28 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |
|            1 |     3209 | 2024-09-03 | Team Spirit Academy | L   | 0.006      | -            | -                | -                | -         |    -0.01 | BluePho3nix, jocab, MisteM, Silence, xKacpersky |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
