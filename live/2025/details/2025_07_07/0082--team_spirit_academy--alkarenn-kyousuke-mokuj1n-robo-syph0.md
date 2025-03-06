### Roster Details<br />
Team Name: Team Spirit Academy<br />
Roster: alkarenn, kyousuke, Mokuj1n, robo, SYPH0<br />
Global Rank: [82](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [55]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  415.3<br />
<br />
Final Rank Value (415.3) = Starting Rank Value (407.4) + Head To Head Adjustments (7.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.003<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 407.4
- 400 + ( ( 0.003 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 407.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      308 | 2025-02-12 | Dynamo Eclot | L   | 0.232      | -            | -                | -                | -         |    -0.99 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            4 |      466 | 2025-02-08 | Alliance     | W   | 0.203      | 0.435        | 0.000 (0.000)    | 0.702 (0.062)    | 0 (0.000) |     4.34 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            3 |      514 | 2025-02-06 | Fnatic       | L   | 0.192      | -            | -                | -                | -         |    -1.67 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            2 |      584 | 2025-02-04 | MoneyF       | W   | 0.176      | 0.435        | 0.000 (0.000)    | 0.062 (0.005)    | 0 (0.000) |     2.72 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |
|            1 |      596 | 2025-02-02 | ECSTATIC     | W   | 0.165      | 0.435        | 0.000 (0.000)    | 0.735 (0.053)    | 0 (0.000) |     3.48 | alkarenn, kyousuke, Mokuj1n, robo, SYPH0 |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
