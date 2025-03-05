### Roster Details<br />
Team Name: Team Poland (Female team)<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [75](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [56]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  921.3<br />
<br />
Final Rank Value (921.3) = Starting Rank Value (905.9) + Head To Head Adjustments (15.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.501[<sup>1</sup>](#table2)
- Bounty Collected: 0.276[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.278[<sup>2</sup>](#table1)

The average of these factors is 0.266<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 905.9
- 400 + ( ( 0.266 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 905.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1479 | 2024-11-14 | Prototype Blaze            | W   | 0.486      | 0.557        | 0.058 (0.016)    | 0.173 (0.047)    | 1 (0.486) |     6.36 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     1498 | 2024-11-14 | Team USA (Female team)     | W   | 0.484      | 0.557        | 0.014 (0.004)    | 0.028 (0.008)    | 1 (0.484) |     2.51 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     1520 | 2024-11-13 | Team Sweden (Female team)  | W   | 0.478      | 0.557        | 0.007 (0.002)    | 0.028 (0.008)    | 1 (0.478) |     2.34 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     1568 | 2024-11-11 | Team Denmark (Female team) | W   | 0.466      | 0.557        | 0.008 (0.002)    | 0.067 (0.017)    | 1 (0.466) |     3.27 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     1574 | 2024-11-11 | Team Canada (Female team)  | W   | 0.465      | 0.557        | 0.000 (0.000)    | 0.028 (0.007)    | 1 (0.465) |     0.93 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34,052.08)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.10) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.486 | $70,000.00     | $34,052.08      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
