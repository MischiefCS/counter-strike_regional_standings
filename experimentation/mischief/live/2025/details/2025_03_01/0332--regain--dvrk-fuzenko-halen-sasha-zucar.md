### Roster Details<br />
Team Name: Regain<br />
Roster: dvrk, Fuzenko, Halen, sasha, Zucar<br />
Global Rank: [332](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [88]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  420.7<br />
<br />
Final Rank Value (420.7) = Starting Rank Value (401.6) + Head To Head Adjustments (19.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.001<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 401.6
- 400 + ( ( 0.001 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 401.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      314 | 2025-02-15 | MCS Gaming         | L   | 1.000      | -            | -                | -                | -         |    -7.33 | dvrk, Fuzenko, Halen, sasha, Zucar    |
|            7 |      316 | 2025-02-15 | HbITuKu            | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.056 (0.008)    | 0 (0.000) |    15.20 | dvrk, Fuzenko, Halen, sasha, Zucar    |
|            6 |      367 | 2025-02-14 | Aetheris           | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.167 (0.024)    | 0 (0.000) |    15.23 | dvrk, Fuzenko, Halen, sasha, Zucar    |
|            5 |     1962 | 2024-12-02 | Bad Boys           | L   | 0.609      | -            | -                | -                | -         |    -3.85 | dvrk, emothug, Halen, sasha, Zucar    |
|            4 |     4327 | 2024-09-20 | InControl          | L   | 0.122      | -            | -                | -                | -         |    -0.87 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            3 |     4476 | 2024-09-15 | What's for Dinner  | W   | 0.088      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.38 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            2 |     4570 | 2024-09-12 | MIGHT              | L   | 0.068      | -            | -                | -                | -         |    -0.29 | dvrk, hunger, Pose1doNN, sasha, Zucar |
|            1 |     4638 | 2024-09-10 | Familia Maquininha | L   | 0.054      | -            | -                | -                | -         |    -0.30 | dvrk, hunger, Pose1doNN, sasha, Zucar |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
