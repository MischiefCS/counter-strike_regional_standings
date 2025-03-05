### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, Minus, motm, WolfY<br />
Global Rank: [234](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [70]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  587.7<br />
<br />
Final Rank Value (587.7) = Starting Rank Value (528.3) + Head To Head Adjustments (59.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.028[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.067<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 528.3
- 400 + ( ( 0.067 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 528.3


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
|            8 |      322 | 2025-02-11 | Nouns Esports | L   | 1.000      | -            | -                | -                | -         |    -6.19 | chop, Grizz, Minus, motm, WolfY |
|            7 |      327 | 2025-02-11 | NRG           | L   | 1.000      | -            | -                | -                | -         |    -2.41 | chop, Grizz, Minus, motm, WolfY |
|            6 |      350 | 2025-02-10 | M80           | L   | 1.000      | -            | -                | -                | -         |    -2.69 | chop, Minus, motm, steel, WolfY |
|            5 |      354 | 2025-02-10 | MCS Gaming    | W   | 1.000      | 0.942        | 0.002 (0.002)    | 0.060 (0.056)    | 0 (0.000) |    15.62 | chop, Minus, motm, steel, WolfY |
|            4 |      389 | 2025-02-09 | M80           | L   | 1.000      | -            | -                | -                | -         |    -2.54 | chop, Minus, motm, steel, WolfY |
|            3 |      419 | 2025-02-08 | Nouns Esports | W   | 1.000      | 0.405        | 0.007 (0.003)    | 0.361 (0.146)    | 0 (0.000) |    26.39 | chop, Grizz, Minus, motm, WolfY |
|            2 |      423 | 2025-02-08 | Getting Info  | W   | 1.000      | 0.405        | 0.000 (0.000)    | 0.060 (0.024)    | 0 (0.000) |    13.33 | chop, Grizz, Minus, motm, WolfY |
|            1 |      435 | 2025-02-08 | MCS Gaming    | W   | 1.000      | 0.936        | 0.002 (0.002)    | 0.060 (0.056)    | 0 (0.000) |    17.93 | chop, Minus, motm, steel, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
