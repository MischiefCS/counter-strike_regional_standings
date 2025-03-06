### Roster Details<br />
Team Name: Undone<br />
Roster: chop, cxzi, motm, Skadoodle, steel<br />
Global Rank: [86](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [19]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  628.1<br />
<br />
Final Rank Value (628.1) = Starting Rank Value (626.1) + Head To Head Adjustments (2.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.227[<sup>1</sup>](#table2)
- Bounty Collected: 0.144[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.019[<sup>2</sup>](#table1)

The average of these factors is 0.098<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 626.1
- 400 + ( ( 0.098 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 626.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           10 |      860 | 2024-12-14 | Bad News Capybaras | W   | 0.067      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.67 | chop, cxzi, motm, Skadoodle, steel |
|            9 |      887 | 2024-12-13 | Alter Iron Club    | W   | 0.061      | 0.143        | 0.001 (0.000)    | 0.113 (0.001)    | 0 (0.000) |     0.98 | chop, cxzi, motm, Skadoodle, steel |
|            8 |      922 | 2024-12-11 | Bad News Capybaras | W   | 0.047      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.47 | chop, cxzi, motm, Skadoodle, steel |
|            7 |      933 | 2024-12-10 | InControl          | W   | 0.041      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | chop, cxzi, motm, Skadoodle, steel |
|            6 |      962 | 2024-12-08 | Nouns Esports      | L   | 0.025      | -            | -                | -                | -         |    -0.52 | chop, cxzi, motm, steel, taggy     |
|            5 |      971 | 2024-12-07 | MIGHT              | W   | 0.021      | 0.384        | 0.000 (0.000)    | 0.253 (0.002)    | 1 (0.021) |     0.22 | chop, cxzi, motm, steel, taggy     |
|            4 |      977 | 2024-12-07 | Fisher College     | W   | 0.020      | 0.384        | 0.000 (0.000)    | 0.003 (0.000)    | 1 (0.020) |     0.14 | chop, cxzi, motm, steel, taggy     |
|            3 |      980 | 2024-12-07 | NRG                | L   | 0.019      | -            | -                | -                | -         |    -0.23 | chop, cxzi, motm, steel, taggy     |
|            2 |     1001 | 2024-12-06 | Anti-Eco Club      | W   | 0.014      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.014) |     0.10 | chop, cxzi, motm, steel, taggy     |
|            1 |     1031 | 2024-12-05 | Alter Iron Club    | L   | 0.007      | -            | -                | -                | -         |    -0.11 | chop, cxzi, motm, Skadoodle, steel |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($34.20)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.027 | $1,250.00      | $34.20          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
