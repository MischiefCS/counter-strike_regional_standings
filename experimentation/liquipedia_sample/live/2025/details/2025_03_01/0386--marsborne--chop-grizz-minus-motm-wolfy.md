### Roster Details<br />
Team Name: Marsborne<br />
Roster: chop, Grizz, Minus, motm, WolfY<br />
Global Rank: [386](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [85]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  594.4<br />
<br />
Final Rank Value (594.4) = Starting Rank Value (517.2) + Head To Head Adjustments (77.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.221[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 517.2
- 400 + ( ( 0.060 - 0.000 ) / ( 0.812 - 0.000 ) ) * 1600 = 517.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      303 | 2025-02-11 | Nouns Esports   | L   | 1.000      | -            | -                | -                | -         |    -6.76 | chop, Grizz, Minus, motm, WolfY |
|            8 |      308 | 2025-02-11 | NRG             | L   | 1.000      | -            | -                | -                | -         |    -3.01 | chop, Grizz, Minus, motm, WolfY |
|            7 |      330 | 2025-02-10 | M80             | L   | 1.000      | -            | -                | -                | -         |    -4.14 | chop, Minus, motm, steel, WolfY |
|            6 |      334 | 2025-02-10 | MCS Gaming      | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.173 (0.025)    | 0 (0.000) |    14.92 | chop, Minus, motm, steel, WolfY |
|            5 |      370 | 2025-02-09 | M80             | L   | 1.000      | -            | -                | -                | -         |    -4.00 | chop, Minus, motm, steel, WolfY |
|            4 |      400 | 2025-02-08 | Nouns Esports   | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.361 (0.052)    | 0 (0.000) |    25.78 | chop, Grizz, Minus, motm, WolfY |
|            3 |      405 | 2025-02-08 | Getting Info    | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.103 (0.015)    | 0 (0.000) |    13.86 | chop, Grizz, Minus, motm, WolfY |
|            2 |      416 | 2025-02-08 | MCS Gaming      | W   | 1.000      | 0.143        | 0.003 (0.000)    | 0.173 (0.025)    | 0 (0.000) |    17.12 | chop, Minus, motm, steel, WolfY |
|            1 |      480 | 2025-02-07 | Alter Iron Club | W   | 1.000      | 0.143        | 0.009 (0.001)    | 0.391 (0.056)    | 0 (0.000) |    23.43 | chop, Grizz, Minus, motm, WolfY |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,543.84)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by liquipedia.net_<br />
