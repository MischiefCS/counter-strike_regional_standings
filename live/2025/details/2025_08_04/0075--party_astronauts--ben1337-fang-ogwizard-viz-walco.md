### Roster Details<br />
Team Name: Party Astronauts<br />
Roster: ben1337, FaNg, ogwizard, viz, Walco<br />
Global Rank: [75](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [18]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  400.8<br />
<br />
Final Rank Value (400.8) = Starting Rank Value (400.0) + Head To Head Adjustments (0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.000<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 400.0
- 400 + ( ( 0.000 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 400.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      351 | 2025-02-10 | MIGHT                | L   | 0.033      | -            | -                | -                | -         |    -0.53 | ben1337, FaNg, ogwizard, viz, Walco |
|            4 |      395 | 2025-02-09 | Chicken Coop Esports | W   | 0.026      | 0.143        | 0.000 (0.000)    | 0.029 (0.000)    | 0 (0.000) |     0.40 | ben1337, FaNg, ogwizard, viz, Walco |
|            3 |      420 | 2025-02-08 | Akimbo Esports       | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.030 (0.000)    | 0 (0.000) |     0.32 | ben1337, FaNg, ogwizard, viz, Walco |
|            2 |      424 | 2025-02-08 | Chill Guys           | W   | 0.020      | 0.143        | 0.000 (0.000)    | 0.067 (0.000)    | 0 (0.000) |     0.31 | ben1337, FaNg, ogwizard, viz, Walco |
|            1 |      443 | 2025-02-08 | MIGHT                | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.137 (0.000)    | 0 (0.000) |     0.29 | ben1337, FaNg, ogwizard, viz, Walco |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
