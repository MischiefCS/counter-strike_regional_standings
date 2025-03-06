### Roster Details<br />
Team Name: Team Poland (Female team)<br />
Roster: Angelka, Hanka, LETi, Liina, vicu<br />
Global Rank: [51](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  866.9<br />
<br />
Final Rank Value (866.9) = Starting Rank Value (859.1) + Head To Head Adjustments (7.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.469[<sup>1</sup>](#table2)
- Bounty Collected: 0.245[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.171[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 859.1
- 400 + ( ( 0.222 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 859.1


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
|            5 |     1479 | 2024-11-14 | Prototype Blaze            | W   | 0.238      | 0.557        | 0.042 (0.006)    | 0.135 (0.018)    | 1 (0.238) |     3.22 | Angelka, Hanka, LETi, Liina, vicu |
|            4 |     1498 | 2024-11-14 | Team USA (Female team)     | W   | 0.236      | 0.557        | 0.011 (0.001)    | 0.018 (0.002)    | 1 (0.236) |     1.45 | Angelka, Hanka, LETi, Liina, vicu |
|            3 |     1520 | 2024-11-13 | Team Sweden (Female team)  | W   | 0.230      | 0.557        | 0.005 (0.001)    | 0.018 (0.002)    | 1 (0.230) |     1.33 | Angelka, Hanka, LETi, Liina, vicu |
|            2 |     1568 | 2024-11-11 | Team Denmark (Female team) | W   | 0.218      | 0.557        | 0.006 (0.001)    | 0.036 (0.004)    | 1 (0.218) |     1.27 | Angelka, Hanka, LETi, Liina, vicu |
|            1 |     1574 | 2024-11-11 | Team Canada (Female team)  | W   | 0.217      | 0.557        | 0.000 (0.000)    | 0.018 (0.002)    | 1 (0.217) |     0.53 | Angelka, Hanka, LETi, Liina, vicu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,668.75)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-14 |      0.238 | $70,000.00     | $16,668.75      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
