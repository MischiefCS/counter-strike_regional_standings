### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, Minus, motm, WolfY<br />
Global Rank: [200](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [58]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  550.0<br />
<br />
Final Rank Value (550.0) = Starting Rank Value (507.9) + Head To Head Adjustments (42.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.202[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.052<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 507.9
- 400 + ( ( 0.052 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 507.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            8 |      322 | 2025-02-11 | Nouns Esports | L   | 0.834      | -            | -                | -                | -         |    -5.95 | chop, Grizz, Minus, motm, WolfY |
|            7 |      327 | 2025-02-11 | NRG           | L   | 0.833      | -            | -                | -                | -         |    -2.77 | chop, Grizz, Minus, motm, WolfY |
|            6 |      350 | 2025-02-10 | M80           | L   | 0.827      | -            | -                | -                | -         |    -5.68 | chop, Minus, motm, steel, WolfY |
|            5 |      354 | 2025-02-10 | MCS Gaming    | W   | 0.826      | 0.143        | 0.002 (0.000)    | 0.066 (0.008)    | 0 (0.000) |    14.56 | chop, Minus, motm, steel, WolfY |
|            4 |      389 | 2025-02-09 | M80           | L   | 0.819      | -            | -                | -                | -         |    -5.55 | chop, Minus, motm, steel, WolfY |
|            3 |      419 | 2025-02-08 | Nouns Esports | W   | 0.813      | 0.143        | 0.005 (0.001)    | 0.346 (0.040)    | 0 (0.000) |    20.59 | chop, Grizz, Minus, motm, WolfY |
|            2 |      423 | 2025-02-08 | Getting Info  | W   | 0.813      | 0.143        | 0.000 (0.000)    | 0.069 (0.008)    | 0 (0.000) |    11.01 | chop, Grizz, Minus, motm, WolfY |
|            1 |      435 | 2025-02-08 | MCS Gaming    | W   | 0.812      | 0.143        | 0.002 (0.000)    | 0.066 (0.008)    | 0 (0.000) |    15.81 | chop, Minus, motm, steel, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
