### Roster Details<br />
Team Name: LAG Gaming<br />
Roster: alula, Experative, spud, TR0JN, Weeza<br />
Global Rank: [203](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_04_07.md)<br />
Regional Rank: [59]( ../../standings_americas_2025_04_07.md)<br />
<br />
Final Rank Value:  538.7<br />
<br />
Final Rank Value (538.7) = Starting Rank Value (566.9) + Head To Head Adjustments (-28.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.218[<sup>1</sup>](#table2)
- Bounty Collected: 0.105[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.081<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 566.9
- 400 + ( ( 0.081 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 566.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      396 | 2025-02-09 | MIGHT                | L   | 0.819      | -            | -                | -                | -         |    -8.56 | alula, Experative, spud, TR0JN, Weeza  |
|            5 |      436 | 2025-02-08 | Chicken Coop Esports | L   | 0.812      | -            | -                | -                | -         |    -9.76 | alula, Experative, spud, TR0JN, Weeza  |
|            4 |      861 | 2024-12-14 | Alter Iron Club      | L   | 0.441      | -            | -                | -                | -         |    -4.46 | Experative, Nyyx, rayxts, TR0JN, Weeza |
|            3 |      888 | 2024-12-13 | Bad News Capybaras   | L   | 0.434      | -            | -                | -                | -         |    -5.39 | Experative, nicx, rayxts, TR0JN, Weeza |
|            2 |     2007 | 2024-10-09 | Bad News Capybaras   | W   | 0.000      | 0.477        | 0.000 (0.000)    | 0.101 (0.000)    | 0 (0.000) |     0.01 | Experative, nicx, rayxts, TR0JN, Weeza |
|            1 |     2016 | 2024-10-09 | Bad News Capybaras   | L   | 0.000      | -            | -                | -                | -         |     0.00 | Experative, nicx, rayxts, TR0JN, Weeza |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($58.22)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.073 | $800.00        | $58.22          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
