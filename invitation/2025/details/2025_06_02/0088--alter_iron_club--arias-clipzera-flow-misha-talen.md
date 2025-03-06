### Roster Details<br />
Team Name: Alter Iron Club<br />
Roster: arias, clipzera, flow, Misha, Talen<br />
Global Rank: [88](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_06_02.md)<br />
Regional Rank: [20]( ../../standings_americas_2025_06_02.md)<br />
<br />
Final Rank Value:  619.9<br />
<br />
Final Rank Value (619.9) = Starting Rank Value (633.4) + Head To Head Adjustments (-13.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.000[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.101<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 633.4
- 400 + ( ( 0.101 - 0.000 ) / ( 0.691 - 0.000 ) ) * 1600 = 633.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      356 | 2025-02-10 | Immigrants Peek      | L   | 0.452      | -            | -                | -                | -         |    -7.29 | arias, clipzera, flow, Misha, Talen  |
|           10 |      393 | 2025-02-09 | Vagrants             | L   | 0.446      | -            | -                | -                | -         |    -9.52 | arias, clipzera, flow, Misha, Talen  |
|            9 |      421 | 2025-02-08 | Mythic               | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.93 | arias, clipzera, flow, Misha, Talen  |
|            8 |      836 | 2024-12-15 | Bad News Capybaras   | W   | 0.074      | 0.143        | 0.000 (0.000)    | 0.023 (0.000)    | 0 (0.000) |     0.72 | arias, clipzera, Keiti, Misha, Talen |
|            7 |      861 | 2024-12-14 | LAG Gaming           | W   | 0.067      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.45 | arias, clipzera, Keiti, Misha, Talen |
|            6 |      887 | 2024-12-13 | Undone               | L   | 0.061      | -            | -                | -                | -         |    -0.98 | arias, clipzera, Keiti, Misha, Talen |
|            5 |      954 | 2024-12-08 | Make Your Mind       | L   | 0.027      | -            | -                | -                | -         |    -0.42 | arias, clipzera, flow, Misha, Talen  |
|            4 |      975 | 2024-12-07 | Chicken Coop Esports | W   | 0.021      | 0.372        | 0.001 (0.000)    | 0.080 (0.001)    | 0 (0.000) |     0.25 | arias, clipzera, flow, Misha, Talen  |
|            3 |     1005 | 2024-12-06 | Bad Boys             | W   | 0.014      | 0.372        | 0.001 (0.000)    | 0.001 (0.000)    | 0 (0.000) |     0.21 | arias, clipzera, flow, Misha, Talen  |
|            2 |     1031 | 2024-12-05 | Undone               | W   | 0.007      | 0.372        | 0.000 (0.000)    | 0.041 (0.000)    | 0 (0.000) |     0.11 | arias, clipzera, flow, Misha, Talen  |
|            1 |     1064 | 2024-12-04 | Immigrants Peek      | W   | 0.001      | 0.372        | 0.000 (0.000)    | 0.246 (0.000)    | 0 (0.000) |     0.01 | arias, clipzera, flow, Misha, Talen  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($117.65)
- Divide that value by the 5th highest value among all rosters ($87,854.17)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-08 |      0.027 | $4,300.00      | $117.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
