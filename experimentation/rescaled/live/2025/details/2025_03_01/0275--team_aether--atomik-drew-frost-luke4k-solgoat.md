### Roster Details<br />
Team Name: Team Aether<br />
Roster: AtomiK, Drew, Frost, LUKE4k, SolGoat<br />
Global Rank: [275](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_03_01.md)<br />
Regional Rank: [86]( ../../standings_americas_2025_03_01.md)<br />
<br />
Final Rank Value:  474.0<br />
<br />
Final Rank Value (474.0) = Starting Rank Value (472.4) + Head To Head Adjustments (1.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.152[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.038<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 472.4
- 400 + ( ( 0.038 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 472.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2258 | 2024-10-02 | Nouns Esports              | L   | 0.202      | -            | -                | -                | -         |    -1.20 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            4 |     2431 | 2024-09-27 | Party Astronauts           | L   | 0.168      | -            | -                | -                | -         |    -0.85 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            3 |     2596 | 2024-09-24 | Team Canada                | W   | 0.147      | 0.371        | 0.000 (0.000)    | 0.040 (0.002)    | 0 (0.000) |     2.70 | AtomiK, Drew, Frost, LUKE4k, SolGoat |
|            2 |     2685 | 2024-09-21 | Dangerous (Ukrainian team) | W   | 0.128      | 0.371        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.61 | AtomiK, Frost, Izik, LUKE4k, SolGoat |
|            1 |     2967 | 2024-09-11 | Akimbo Esports             | L   | 0.062      | -            | -                | -                | -         |    -0.59 | AtomiK, Frost, LUKE4k, RiFT, SolGoat |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
